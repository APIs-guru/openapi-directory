from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature


@dataclass_json
@dataclass
class Features:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    features: Optional[List[feature.Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
