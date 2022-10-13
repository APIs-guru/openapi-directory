from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SyncAuthorization:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    
