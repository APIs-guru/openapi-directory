from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotSummary:
    r"""SlotSummary
    Summary information about a slot, a value that the bot elicits from the user.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    slot_constraint: Optional[SlotConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotId') }})
    slot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotName') }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeId') }})
    value_elicitation_prompt_specification: Optional[PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueElicitationPromptSpecification') }})
    
