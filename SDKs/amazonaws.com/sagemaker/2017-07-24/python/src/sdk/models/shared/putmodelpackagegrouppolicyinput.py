from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutModelPackageGroupPolicyInput:
    model_package_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    resource_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePolicy' }})
    
