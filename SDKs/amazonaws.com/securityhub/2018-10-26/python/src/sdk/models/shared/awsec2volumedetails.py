from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2volumeattachment


@dataclass_json
@dataclass
class AwsEc2VolumeDetails:
    attachments: Optional[List[awsec2volumeattachment.AwsEc2VolumeAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
