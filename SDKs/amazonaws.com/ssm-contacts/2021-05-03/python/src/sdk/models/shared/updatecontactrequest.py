from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateContactRequest:
    contact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    plan: Optional[Plan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plan') }})
    
