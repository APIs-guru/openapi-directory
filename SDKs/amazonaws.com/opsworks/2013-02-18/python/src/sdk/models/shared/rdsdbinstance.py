from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RdsDbInstance:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    db_instance_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbInstanceIdentifier' }})
    db_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbPassword' }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DbUser' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engine' }})
    missing_on_rds: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MissingOnRds' }})
    rds_db_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RdsDbInstanceArn' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
