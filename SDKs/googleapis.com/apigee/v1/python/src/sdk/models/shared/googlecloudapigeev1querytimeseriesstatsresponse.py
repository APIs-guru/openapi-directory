from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse:
    r"""GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
    Represents security stats result as a collection of time series sequences.
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    values: Optional[List[GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
