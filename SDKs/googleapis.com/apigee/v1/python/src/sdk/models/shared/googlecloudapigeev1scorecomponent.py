from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1scorecomponentrecommendation


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ScoreComponent:
    calculate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculateTime' }})
    data_capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCaptureTime' }})
    drilldown_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drilldownPaths' }})
    recommendations: Optional[List[googlecloudapigeev1scorecomponentrecommendation.GoogleCloudApigeeV1ScoreComponentRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    score_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scorePath' }})
    
