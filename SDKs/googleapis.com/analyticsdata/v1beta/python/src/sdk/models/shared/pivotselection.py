from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PivotSelection:
    r"""PivotSelection
    A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric's value. For example if pivots = {{\"browser\", \"Chrome\"}} and metric_name = \"Sessions\", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------
    """
    
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    dimension_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValue') }})
    
