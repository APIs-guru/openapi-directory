from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1scorecomponentrecommendationaction


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponentRecommendation:
    actions: Optional[List[googlecloudapigeev1scorecomponentrecommendationaction.GoogleCloudApigeeV1ScoreComponentRecommendationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    impact: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
