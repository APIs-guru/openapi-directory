from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LeadFormSettings:
    capture_form_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capture_form_enabled' }})
    first_name_field_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name_field_enabled' }})
    first_name_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name_field_required' }})
    integration_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration_enabled' }})
    last_name_field_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name_field_enabled' }})
    last_name_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name_field_required' }})
    telephone_field_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephone_field_enabled' }})
    telephone_field_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephone_field_required' }})
    work_email_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'work_email_validation' }})
    
