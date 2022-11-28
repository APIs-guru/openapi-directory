from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1RevenueShareRange:
    r"""GoogleCloudApigeeV1RevenueShareRange
    API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.
    """
    
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    share_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharePercentage') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
