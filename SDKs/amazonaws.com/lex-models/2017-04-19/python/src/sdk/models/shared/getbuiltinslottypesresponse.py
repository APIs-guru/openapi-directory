from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builtinslottypemetadata


@dataclass_json
@dataclass
class GetBuiltinSlotTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    slot_types: Optional[List[builtinslottypemetadata.BuiltinSlotTypeMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypes' }})
    
