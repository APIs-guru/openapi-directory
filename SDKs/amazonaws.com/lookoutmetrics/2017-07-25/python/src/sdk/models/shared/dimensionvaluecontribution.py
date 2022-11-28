from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionValueContribution:
    r"""DimensionValueContribution
    The severity of a value of a dimension that contributed to an anomaly.
    """
    
    contribution_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributionScore') }})
    dimension_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValue') }})
    
