from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupLicensesListResponse:
    group_license: Optional[List[GroupLicense]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLicense') }})
    
