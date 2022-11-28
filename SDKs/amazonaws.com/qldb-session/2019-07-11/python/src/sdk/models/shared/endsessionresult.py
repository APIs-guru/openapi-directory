from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndSessionResult:
    r"""EndSessionResult
    Contains the details of the ended session.
    """
    
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
