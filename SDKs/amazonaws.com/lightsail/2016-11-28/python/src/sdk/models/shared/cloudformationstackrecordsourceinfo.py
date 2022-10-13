from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudformationstackrecordsourcetype_enum


@dataclass_json
@dataclass
class CloudFormationStackRecordSourceInfo:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[cloudformationstackrecordsourcetype_enum.CloudFormationStackRecordSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
