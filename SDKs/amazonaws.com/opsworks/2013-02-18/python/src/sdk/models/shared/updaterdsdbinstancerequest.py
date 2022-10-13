from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateRdsDbInstanceRequest:
    db_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbPassword' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    rds_db_instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsDbInstanceArn' }})
    
