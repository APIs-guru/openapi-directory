from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RowDimensions:
    r"""RowDimensions
    A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
    """
    
    publisher_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherIdentifier') }})
    time_interval: Optional[TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInterval') }})
    
