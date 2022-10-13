from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namespacesummary


@dataclass_json
@dataclass
class ListNamespacesResponse:
    namespaces: Optional[List[namespacesummary.NamespaceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespaces' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
