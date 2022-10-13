from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builtinslottypesummary


@dataclass_json
@dataclass
class ListBuiltInSlotTypesResponse:
    built_in_slot_type_summaries: Optional[List[builtinslottypesummary.BuiltInSlotTypeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtInSlotTypeSummaries' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
