from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeCustomKeyStoresRequest:
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    custom_key_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
