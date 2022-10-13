from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum(str, Enum):
    SINGLE = "single"
    MULTIPLE = "multiple"


@dataclass_json
@dataclass
class ModifierGroup:
    alternate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternate_name' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    maximum_allowed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum_allowed' }})
    minimum_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum_required' }})
    modifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    present_at_all_locations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'present_at_all_locations' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    selection_type: Optional[ModifierGroupSelectionTypeIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection_type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
