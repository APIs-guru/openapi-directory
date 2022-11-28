from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchPlaceIndexForTextSummary:
    r"""SearchPlaceIndexForTextSummary
    A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
    """
    
    data_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    bias_position: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BiasPosition') }})
    filter_b_box: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterBBox') }})
    filter_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterCountries') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    result_b_box: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultBBox') }})
    
