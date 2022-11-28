from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HandshakeFilter:
    r"""HandshakeFilter
    Specifies the criteria that are used to select the handshakes for the operation.
    """
    
    action_type: Optional[ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    parent_handshake_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentHandshakeId') }})
    
