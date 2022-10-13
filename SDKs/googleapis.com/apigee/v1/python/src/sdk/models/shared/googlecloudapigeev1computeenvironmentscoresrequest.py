from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1computeenvironmentscoresrequestfilter
from . import googletypeinterval


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest:
    filters: Optional[List[googlecloudapigeev1computeenvironmentscoresrequestfilter.GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    time_range: Optional[googletypeinterval.GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
