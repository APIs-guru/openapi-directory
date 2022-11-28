from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TablesAnnotation:
    r"""TablesAnnotation
    Contains annotation details specific to Tables.
    """
    
    baseline_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineScore') }})
    prediction_interval: Optional[DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionInterval') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    tables_model_column_info: Optional[List[TablesModelColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablesModelColumnInfo') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
