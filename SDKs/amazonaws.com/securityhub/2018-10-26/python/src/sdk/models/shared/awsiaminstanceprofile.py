from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsiaminstanceprofilerole


@dataclass_json
@dataclass
class AwsIamInstanceProfile:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    instance_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileId' }})
    instance_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileName' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    roles: Optional[List[awsiaminstanceprofilerole.AwsIamInstanceProfileRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roles' }})
    
