from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import slottypemetadata


@dataclass_json
@dataclass
class GetSlotTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    slot_types: Optional[List[slottypemetadata.SlotTypeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypes' }})
    
