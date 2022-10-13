from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1score


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    scores: Optional[List[googlecloudapigeev1score.GoogleCloudApigeeV1Score]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scores' }})
    
