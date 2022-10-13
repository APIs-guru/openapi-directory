from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RankingMetrics:
    average_rank: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageRank' }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAveragePrecision' }})
    mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSquaredError' }})
    normalized_discounted_cumulative_gain: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedDiscountedCumulativeGain' }})
    
