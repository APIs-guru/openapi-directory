from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import featuregroupsummary


@dataclass_json
@dataclass
class ListFeatureGroupsResponse:
    feature_group_summaries: List[featuregroupsummary.FeatureGroupSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureGroupSummaries' }})
    next_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
