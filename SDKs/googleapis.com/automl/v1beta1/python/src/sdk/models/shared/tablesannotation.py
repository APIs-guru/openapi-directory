from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import doublerange
from . import tablesmodelcolumninfo


@dataclass_json
@dataclass
class TablesAnnotation:
    baseline_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineScore' }})
    prediction_interval: Optional[doublerange.DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionInterval' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    tables_model_column_info: Optional[List[tablesmodelcolumninfo.TablesModelColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tablesModelColumnInfo' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
