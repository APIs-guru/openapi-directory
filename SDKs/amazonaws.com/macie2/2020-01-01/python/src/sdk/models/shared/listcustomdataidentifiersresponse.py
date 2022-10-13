from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdataidentifiersummary


@dataclass_json
@dataclass
class ListCustomDataIdentifiersResponse:
    items: Optional[List[customdataidentifiersummary.CustomDataIdentifierSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
