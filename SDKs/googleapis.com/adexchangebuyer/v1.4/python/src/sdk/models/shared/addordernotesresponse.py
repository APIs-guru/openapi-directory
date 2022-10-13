from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import marketplacenote


@dataclass_json
@dataclass
class AddOrderNotesResponse:
    notes: Optional[List[marketplacenote.MarketplaceNote]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    
