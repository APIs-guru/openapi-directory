from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import xssmatchtuple


@dataclass_json
@dataclass
class XSSMatchSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    xss_match_tuple: xssmatchtuple.XSSMatchTuple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchTuple' }})
    
