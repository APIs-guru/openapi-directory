from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataReplicationError:
    r"""DataReplicationError
    Error in data replication.
    """
    
    error: Optional[DataReplicationErrorStringEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    raw_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawError') }})
    
