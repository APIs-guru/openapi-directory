from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import xssmatchsetupdate


@dataclass_json
@dataclass
class UpdateXSSMatchSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    updates: List[xssmatchsetupdate.XSSMatchSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    xss_match_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchSetId' }})
    
