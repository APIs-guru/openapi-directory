from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import xssmatchset


@dataclass_json
@dataclass
class GetXSSMatchSetResponse:
    xss_match_set: Optional[xssmatchset.XSSMatchSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchSet' }})
    
