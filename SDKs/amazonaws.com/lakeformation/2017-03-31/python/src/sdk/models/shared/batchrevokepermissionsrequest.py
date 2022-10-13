from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchpermissionsrequestentry


@dataclass_json
@dataclass
class BatchRevokePermissionsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    entries: List[batchpermissionsrequestentry.BatchPermissionsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    
