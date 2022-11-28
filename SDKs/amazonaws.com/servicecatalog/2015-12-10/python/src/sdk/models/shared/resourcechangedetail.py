from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceChangeDetail:
    r"""ResourceChangeDetail
    Information about a change to a resource attribute.
    """
    
    causing_entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CausingEntity') }})
    evaluation: Optional[EvaluationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Evaluation') }})
    target: Optional[ResourceTargetDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    
