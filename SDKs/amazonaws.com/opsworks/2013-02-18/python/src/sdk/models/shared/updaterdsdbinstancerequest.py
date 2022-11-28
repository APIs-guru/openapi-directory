from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateRdsDbInstanceRequest:
    rds_db_instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RdsDbInstanceArn') }})
    db_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbPassword') }})
    db_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DbUser') }})
    
