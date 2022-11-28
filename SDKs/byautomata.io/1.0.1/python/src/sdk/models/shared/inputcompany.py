from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputCompany:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    employee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('industry') }})
    linkedin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedin') }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
