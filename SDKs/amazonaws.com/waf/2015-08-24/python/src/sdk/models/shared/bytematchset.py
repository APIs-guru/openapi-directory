from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bytematchtuple


@dataclass_json
@dataclass
class ByteMatchSet:
    byte_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchSetId' }})
    byte_match_tuples: List[bytematchtuple.ByteMatchTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchTuples' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
