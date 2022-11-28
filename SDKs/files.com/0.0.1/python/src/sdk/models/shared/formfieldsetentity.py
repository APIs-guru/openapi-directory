from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FormFieldSetEntity:
    r"""FormFieldSetEntity
    Create Form Field Set
    """
    
    form_fields: Optional[FormFieldEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_fields') }})
    form_layout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_layout') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    skip_company: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_company') }})
    skip_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_email') }})
    skip_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
