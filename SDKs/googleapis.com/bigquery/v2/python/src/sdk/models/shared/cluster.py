from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    Message containing the information about one cluster.
    """
    
    centroid_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centroidId') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    feature_values: Optional[List[FeatureValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureValues') }})
    
