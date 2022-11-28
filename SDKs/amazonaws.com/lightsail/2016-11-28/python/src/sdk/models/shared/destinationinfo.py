from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestinationInfo:
    r"""DestinationInfo
    Describes the destination of a record.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
