from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1session


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDebugSessionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sessions: Optional[List[googlecloudapigeev1session.GoogleCloudApigeeV1Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    
