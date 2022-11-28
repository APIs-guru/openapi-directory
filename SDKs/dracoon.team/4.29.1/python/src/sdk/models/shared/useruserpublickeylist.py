from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserUserPublicKeyListOutput:
    r"""UserUserPublicKeyListOutput
    List of user public keys
    """
    
    items: List[UserUserPublicKeyOutput] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
