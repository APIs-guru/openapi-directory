from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RateRange:
    r"""GoogleCloudApigeeV1RateRange
    API call volume range and the fees charged when the total number of API calls is within the range.
    """
    
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    fee: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fee') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
