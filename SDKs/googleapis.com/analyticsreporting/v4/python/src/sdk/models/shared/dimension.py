from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    [Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, \"Paris\" or \"New York\", from which a session originates.
    """
    
    histogram_buckets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramBuckets') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
