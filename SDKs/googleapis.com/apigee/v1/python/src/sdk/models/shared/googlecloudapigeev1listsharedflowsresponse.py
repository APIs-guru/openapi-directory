from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1sharedflow


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSharedFlowsResponse:
    shared_flows: Optional[List[googlecloudapigeev1sharedflow.GoogleCloudApigeeV1SharedFlow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedFlows' }})
    
