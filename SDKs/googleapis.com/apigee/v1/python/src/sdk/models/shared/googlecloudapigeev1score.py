from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1scorecomponent
from . import googlecloudapigeev1scorecomponent
from . import googletypeinterval


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Score:
    component: Optional[googlecloudapigeev1scorecomponent.GoogleCloudApigeeV1ScoreComponent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'component' }})
    subcomponents: Optional[List[googlecloudapigeev1scorecomponent.GoogleCloudApigeeV1ScoreComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subcomponents' }})
    time_range: Optional[googletypeinterval.GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
