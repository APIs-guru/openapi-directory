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
class UpdateEmergencyContactSettingsRequest:
    emergency_contact_list: Optional[List[EmergencyContact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmergencyContactList') }})
    
