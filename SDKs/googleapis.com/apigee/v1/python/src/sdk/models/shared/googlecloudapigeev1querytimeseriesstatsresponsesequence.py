from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence:
    r"""GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence
    A sequence of time series.
    """
    
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    points: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    
