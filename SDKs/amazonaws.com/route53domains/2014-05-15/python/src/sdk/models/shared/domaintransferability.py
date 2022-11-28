from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainTransferability:
    r"""DomainTransferability
    A complex type that contains information about whether the specified domain can be transferred to Route 53.
    """
    
    transferable: Optional[TransferableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transferable') }})
    
