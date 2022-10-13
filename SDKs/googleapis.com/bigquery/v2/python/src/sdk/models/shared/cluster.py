from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import featurevalue


@dataclass_json
@dataclass
class Cluster:
    centroid_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'centroidId' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    feature_values: Optional[List[featurevalue.FeatureValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureValues' }})
    
