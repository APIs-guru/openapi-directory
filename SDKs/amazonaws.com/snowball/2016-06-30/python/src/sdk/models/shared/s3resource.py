from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyrange
from . import targetondeviceservice


@dataclass_json
@dataclass
class S3Resource:
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketArn' }})
    key_range: Optional[keyrange.KeyRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyRange' }})
    target_on_device_services: Optional[List[targetondeviceservice.TargetOnDeviceService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetOnDeviceServices' }})
    
