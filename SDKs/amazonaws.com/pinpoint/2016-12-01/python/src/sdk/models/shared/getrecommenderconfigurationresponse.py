from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import recommenderconfigurationresponse


@dataclass_json
@dataclass
class GetRecommenderConfigurationResponse:
    recommender_configuration_response: recommenderconfigurationresponse.RecommenderConfigurationResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommenderConfigurationResponse' }})
    
