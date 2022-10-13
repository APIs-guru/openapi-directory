from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import streamingimageencryptionconfiguration
from . import streamingimagestate_enum
from . import streamingimagestatuscode_enum


@dataclass_json
@dataclass
class StreamingImage:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2ImageId' }})
    encryption_configuration: Optional[streamingimageencryptionconfiguration.StreamingImageEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfiguration' }})
    eula_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulaIds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    state: Optional[streamingimagestate_enum.StreamingImageStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status_code: Optional[streamingimagestatuscode_enum.StreamingImageStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    streaming_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImageId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
