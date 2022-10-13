from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import evaluationtype_enum
from . import resourcetargetdefinition


@dataclass_json
@dataclass
class ResourceChangeDetail:
    causing_entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CausingEntity' }})
    evaluation: Optional[evaluationtype_enum.EvaluationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Evaluation' }})
    target: Optional[resourcetargetdefinition.ResourceTargetDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
