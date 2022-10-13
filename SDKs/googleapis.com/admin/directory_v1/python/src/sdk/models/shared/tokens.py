from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import token


@dataclass_json
@dataclass
class Tokens:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[token.Token]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
