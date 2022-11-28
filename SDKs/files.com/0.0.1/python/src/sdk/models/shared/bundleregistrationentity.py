from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BundleRegistrationEntity:
    r"""BundleRegistrationEntity
    List Bundle Registrations
    """
    
    clickwrap_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickwrap_body') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    form_field_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_field_data') }})
    form_field_set_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_field_set_id') }})
    inbox_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbox_code') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
