from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import formfieldentity


@dataclass_json
@dataclass
class FormFieldSetEntity:
    form_fields: Optional[formfieldentity.FormFieldEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_fields' }})
    form_layout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_layout' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    skip_company: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_company' }})
    skip_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_email' }})
    skip_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
