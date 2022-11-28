from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightResults:
    r"""InsightResults
    The insight results returned by the <code>GetInsightResults</code> operation.
    """
    
    group_by_attribute: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    insight_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightArn') }})
    result_values: List[InsightResultValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultValues') }})
    
