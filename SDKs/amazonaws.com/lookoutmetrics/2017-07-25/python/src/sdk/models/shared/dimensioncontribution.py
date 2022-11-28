from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionContribution:
    r"""DimensionContribution
    Details about a dimension that contributed to an anomaly.
    """
    
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value_contribution_list: Optional[List[DimensionValueContribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValueContributionList') }})
    
