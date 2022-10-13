from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domains


@dataclass_json
@dataclass
class Domains2:
    domains: Optional[List[domains.Domains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
