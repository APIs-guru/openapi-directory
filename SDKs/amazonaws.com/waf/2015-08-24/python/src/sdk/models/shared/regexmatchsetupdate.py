from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import regexmatchtuple


@dataclass_json
@dataclass
class RegexMatchSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    regex_match_tuple: regexmatchtuple.RegexMatchTuple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchTuple' }})
    
