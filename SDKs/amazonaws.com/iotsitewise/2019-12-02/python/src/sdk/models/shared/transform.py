from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transformprocessingconfig
from . import expressionvariable


@dataclass_json
@dataclass
class Transform:
    expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    processing_config: Optional[transformprocessingconfig.TransformProcessingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingConfig' }})
    variables: List[expressionvariable.ExpressionVariable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    
