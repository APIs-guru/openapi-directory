from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsIamInstanceProfileRole:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    assume_role_policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssumeRolePolicyDocument' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleId' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleName' }})
    
