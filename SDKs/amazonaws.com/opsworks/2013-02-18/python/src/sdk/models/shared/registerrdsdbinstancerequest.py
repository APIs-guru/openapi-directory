from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterRdsDbInstanceRequest:
    db_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbPassword' }})
    db_user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    rds_db_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsDbInstanceArn' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
