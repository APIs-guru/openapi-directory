from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContributionMatrix:
    r"""ContributionMatrix
    Details about dimensions that contributed to an anomaly.
    """
    
    dimension_contribution_list: Optional[List[DimensionContribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionContributionList') }})
    
