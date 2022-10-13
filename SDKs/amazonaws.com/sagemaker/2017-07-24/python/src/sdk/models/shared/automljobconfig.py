from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import automljobcompletioncriteria
from . import automlsecurityconfig


@dataclass_json
@dataclass
class AutoMlJobConfig:
    completion_criteria: Optional[automljobcompletioncriteria.AutoMlJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionCriteria' }})
    security_config: Optional[automlsecurityconfig.AutoMlSecurityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfig' }})
    
