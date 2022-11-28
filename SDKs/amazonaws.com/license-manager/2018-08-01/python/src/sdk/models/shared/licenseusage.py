from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LicenseUsage:
    r"""LicenseUsage
    Describes the entitlement usage associated with a license.
    """
    
    entitlement_usages: Optional[List[EntitlementUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementUsages') }})
    
