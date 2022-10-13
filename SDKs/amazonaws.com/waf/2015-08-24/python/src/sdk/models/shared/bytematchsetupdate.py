from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import bytematchtuple


@dataclass_json
@dataclass
class ByteMatchSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    byte_match_tuple: bytematchtuple.ByteMatchTuple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchTuple' }})
    
