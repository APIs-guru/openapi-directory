from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1scorecomponentrecommendationactionactioncontext


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponentRecommendationAction:
    action_context: Optional[googlecloudapigeev1scorecomponentrecommendationactionactioncontext.GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionContext' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
