from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchPlaceIndexForPositionSummary:
    r"""SearchPlaceIndexForPositionSummary
    A summary of the reverse geocoding request sent using <code>SearchPlaceIndexForPosition</code>.
    """
    
    data_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    
