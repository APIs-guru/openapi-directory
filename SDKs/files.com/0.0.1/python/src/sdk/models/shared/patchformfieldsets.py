from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchFormFieldSetsFormFields:
    default_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_option') }})
    field_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_type') }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help_text') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    options_for_select: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options_for_select') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclass
class PatchFormFieldSets:
    r"""PatchFormFieldSets
    Update Form Field Set
    """
    
    form_fields: Optional[List[PatchFormFieldSetsFormFields]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_fields') }})
    skip_company: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_company') }})
    skip_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_email') }})
    skip_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_name') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
