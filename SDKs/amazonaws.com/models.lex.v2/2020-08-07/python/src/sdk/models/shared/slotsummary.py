from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import slotconstraint_enum
from . import promptspecification


@dataclass_json
@dataclass
class SlotSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    slot_constraint: Optional[slotconstraint_enum.SlotConstraintEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotConstraint' }})
    slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotId' }})
    slot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotName' }})
    slot_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeId' }})
    value_elicitation_prompt_specification: Optional[promptspecification.PromptSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueElicitationPromptSpecification' }})
    
