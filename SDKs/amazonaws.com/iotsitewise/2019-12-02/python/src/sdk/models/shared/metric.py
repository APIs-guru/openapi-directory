from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricprocessingconfig
from . import expressionvariable
from . import metricwindow


@dataclass_json
@dataclass
class Metric:
    expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    processing_config: Optional[metricprocessingconfig.MetricProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingConfig' }})
    variables: List[expressionvariable.ExpressionVariable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    window: metricwindow.MetricWindow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    
