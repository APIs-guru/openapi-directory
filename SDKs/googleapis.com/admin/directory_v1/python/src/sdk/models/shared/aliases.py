from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Aliases:
    aliases: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
