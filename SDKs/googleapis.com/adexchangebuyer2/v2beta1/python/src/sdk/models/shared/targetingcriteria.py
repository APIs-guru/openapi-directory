from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingCriteria:
    r"""TargetingCriteria
    Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
    """
    
    exclusions: Optional[List[TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    inclusions: Optional[List[TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusions') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
