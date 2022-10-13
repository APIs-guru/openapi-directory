from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamingimageencryptionconfigurationkeytype_enum


@dataclass_json
@dataclass
class StreamingImageEncryptionConfiguration:
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyArn' }})
    key_type: streamingimageencryptionconfigurationkeytype_enum.StreamingImageEncryptionConfigurationKeyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    
