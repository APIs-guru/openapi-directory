from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateMaintenanceWindowTargetRequest:
    window_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowId') }})
    window_target_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowTargetId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerInformation') }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replace') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
