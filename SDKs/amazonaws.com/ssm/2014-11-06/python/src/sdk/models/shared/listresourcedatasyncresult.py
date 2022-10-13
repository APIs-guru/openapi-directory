from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcedatasyncitem


@dataclass_json
@dataclass
class ListResourceDataSyncResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_data_sync_items: Optional[List[resourcedatasyncitem.ResourceDataSyncItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDataSyncItems' }})
    
