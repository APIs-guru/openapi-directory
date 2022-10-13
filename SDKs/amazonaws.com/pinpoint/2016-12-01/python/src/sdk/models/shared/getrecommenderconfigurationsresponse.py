from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import listrecommenderconfigurationsresponse


@dataclass_json
@dataclass
class GetRecommenderConfigurationsResponse:
    list_recommender_configurations_response: listrecommenderconfigurationsresponse.ListRecommenderConfigurationsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListRecommenderConfigurationsResponse' }})
    
