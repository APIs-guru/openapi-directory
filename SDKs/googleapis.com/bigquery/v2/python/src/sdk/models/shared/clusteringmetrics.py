from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusteringMetrics:
    r"""ClusteringMetrics
    Evaluation metrics for clustering models.
    """
    
    clusters: Optional[List[Cluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    davies_bouldin_index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daviesBouldinIndex') }})
    mean_squared_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanSquaredDistance') }})
    
