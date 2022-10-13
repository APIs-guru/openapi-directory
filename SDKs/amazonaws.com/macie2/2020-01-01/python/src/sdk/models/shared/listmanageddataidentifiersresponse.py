from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import manageddataidentifiersummary


@dataclass_json
@dataclass
class ListManagedDataIdentifiersResponse:
    items: Optional[List[manageddataidentifiersummary.ManagedDataIdentifierSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
