from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostFormFieldSetsFormFields:
    default_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_option') }})
    field_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_type') }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help_text') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    options_for_select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options_for_select') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclass
class PostFormFieldSets:
    r"""PostFormFieldSets
    Create Form Field Set
    """
    
    form_fields: Optional[List[PostFormFieldSetsFormFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_fields') }})
    skip_company: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_company') }})
    skip_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_email') }})
    skip_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
