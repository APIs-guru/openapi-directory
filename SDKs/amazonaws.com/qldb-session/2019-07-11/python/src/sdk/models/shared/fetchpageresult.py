from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchPageResult:
    r"""FetchPageResult
    Contains the page that was fetched.
    """
    
    consumed_i_os: Optional[IoUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedIOs') }})
    page: Optional[Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Page') }})
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
