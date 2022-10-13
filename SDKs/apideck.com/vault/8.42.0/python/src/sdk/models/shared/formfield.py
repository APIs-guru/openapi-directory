from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class FormField:
    allow_custom_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_custom_values' }})
    custom_field: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    options: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    placeholder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeholder' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitive' }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
