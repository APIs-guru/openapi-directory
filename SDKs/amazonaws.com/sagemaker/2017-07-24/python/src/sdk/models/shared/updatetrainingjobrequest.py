from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import profilerconfigforupdate
from . import profilerruleconfiguration


@dataclass_json
@dataclass
class UpdateTrainingJobRequest:
    profiler_config: Optional[profilerconfigforupdate.ProfilerConfigForUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerConfig' }})
    profiler_rule_configurations: Optional[List[profilerruleconfiguration.ProfilerRuleConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfilerRuleConfigurations' }})
    training_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobName' }})
    
