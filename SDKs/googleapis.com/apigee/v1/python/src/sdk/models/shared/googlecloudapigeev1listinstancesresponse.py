from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1instance


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListInstancesResponse:
    instances: Optional[List[googlecloudapigeev1instance.GoogleCloudApigeeV1Instance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
