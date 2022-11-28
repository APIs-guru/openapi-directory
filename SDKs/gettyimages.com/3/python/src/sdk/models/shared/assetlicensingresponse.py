from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetLicensingResponse:
    acquired_licenses: Optional[List[AssetLicenseNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcquiredLicenses') }})
    credits_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditsUsed') }})
    
