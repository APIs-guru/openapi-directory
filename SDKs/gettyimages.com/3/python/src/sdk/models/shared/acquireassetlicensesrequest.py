from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcquireAssetLicensesRequest:
    license_types: List[ExtendedLicensesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseTypes') }})
    use_team_credits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseTeamCredits') }})
    
