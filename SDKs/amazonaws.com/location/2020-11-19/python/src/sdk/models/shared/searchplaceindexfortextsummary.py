from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchPlaceIndexForTextSummary:
    bias_position: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BiasPosition' }})
    data_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    filter_b_box: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterBBox' }})
    filter_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterCountries' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    result_b_box: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultBBox' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    
