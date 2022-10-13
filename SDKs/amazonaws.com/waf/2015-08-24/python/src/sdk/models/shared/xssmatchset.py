from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import xssmatchtuple


@dataclass_json
@dataclass
class XSSMatchSet:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    xss_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchSetId' }})
    xss_match_tuples: List[xssmatchtuple.XSSMatchTuple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchTuples' }})
    
