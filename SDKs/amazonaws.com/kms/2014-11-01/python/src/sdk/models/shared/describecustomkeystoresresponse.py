from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customkeystoreslistentry


@dataclass_json
@dataclass
class DescribeCustomKeyStoresResponse:
    custom_key_stores: Optional[List[customkeystoreslistentry.CustomKeyStoresListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStores' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
