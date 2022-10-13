from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BundleRegistrationEntity:
    clickwrap_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickwrap_body' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    form_field_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_field_data' }})
    form_field_set_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_field_set_id' }})
    inbox_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbox_code' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
