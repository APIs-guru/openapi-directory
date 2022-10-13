from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1asyncquery


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAsyncQueriesResponse:
    queries: Optional[List[googlecloudapigeev1asyncquery.GoogleCloudApigeeV1AsyncQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    
