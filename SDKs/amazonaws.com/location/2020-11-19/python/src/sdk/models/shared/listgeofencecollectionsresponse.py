from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listgeofencecollectionsresponseentry


@dataclass_json
@dataclass
class ListGeofenceCollectionsResponse:
    entries: List[listgeofencecollectionsresponseentry.ListGeofenceCollectionsResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
