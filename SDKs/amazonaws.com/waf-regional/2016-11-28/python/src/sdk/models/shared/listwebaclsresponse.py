from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webaclsummary


@dataclass_json
@dataclass
class ListWebAcLsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    web_ac_ls: Optional[List[webaclsummary.WebACLSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLs' }})
    
