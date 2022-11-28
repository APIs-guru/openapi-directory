from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterRdsDbInstanceRequest:
    db_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbPassword') }})
    db_user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    rds_db_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstanceArn') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
