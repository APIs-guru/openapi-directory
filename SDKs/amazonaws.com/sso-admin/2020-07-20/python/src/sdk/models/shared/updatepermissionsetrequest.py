from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdatePermissionSetRequest:
    instance_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    permission_set_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    relay_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelayState') }})
    session_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionDuration') }})
    
