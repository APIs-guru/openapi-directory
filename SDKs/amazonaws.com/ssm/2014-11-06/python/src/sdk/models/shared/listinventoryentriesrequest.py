from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inventoryfilter


@dataclass_json
@dataclass
class ListInventoryEntriesRequest:
    filters: Optional[List[inventoryfilter.InventoryFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
