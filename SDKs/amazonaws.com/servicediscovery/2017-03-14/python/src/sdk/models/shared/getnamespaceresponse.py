from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import namespace


@dataclass_json
@dataclass
class GetNamespaceResponse:
    namespace: Optional[namespace.Namespace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    
