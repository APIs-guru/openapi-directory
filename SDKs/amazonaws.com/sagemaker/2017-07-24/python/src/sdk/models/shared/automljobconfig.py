from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlJobConfig:
    r"""AutoMlJobConfig
    A collection of settings used for an AutoML job.
    """
    
    completion_criteria: Optional[AutoMlJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionCriteria') }})
    security_config: Optional[AutoMlSecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfig') }})
    
