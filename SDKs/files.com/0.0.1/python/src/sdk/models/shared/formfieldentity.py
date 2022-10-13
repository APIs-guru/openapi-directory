from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FormFieldEntityFieldTypeEnum(str, Enum):
    TEXT = "text"
    TEXT_AREA = "text_area"
    DROPDOWN = "dropdown"
    RADIO = "radio"


@dataclass_json
@dataclass
class FormFieldEntity:
    default_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_option' }})
    field_type: Optional[FormFieldEntityFieldTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_type' }})
    form_field_set_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_field_set_id' }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'help_text' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    options_for_select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options_for_select' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    
