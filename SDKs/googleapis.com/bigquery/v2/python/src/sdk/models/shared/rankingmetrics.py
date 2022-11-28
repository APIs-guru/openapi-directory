from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RankingMetrics:
    r"""RankingMetrics
    Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
    """
    
    average_rank: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageRank') }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanAveragePrecision') }})
    mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanSquaredError') }})
    normalized_discounted_cumulative_gain: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedDiscountedCumulativeGain') }})
    
