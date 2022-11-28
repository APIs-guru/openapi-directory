from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V2GetKeyStringResponse:
    r"""V2GetKeyStringResponse
    Response message for `GetKeyString` method.
    """
    
    key_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyString') }})
    
