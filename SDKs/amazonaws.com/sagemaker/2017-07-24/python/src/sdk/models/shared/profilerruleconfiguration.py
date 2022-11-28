from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfilerRuleConfiguration:
    r"""ProfilerRuleConfiguration
    Configuration information for profiling rules.
    """
    
    rule_configuration_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleConfigurationName') }})
    rule_evaluator_image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleEvaluatorImage') }})
    instance_type: Optional[ProcessingInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPath') }})
    rule_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleParameters') }})
    s3_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSizeInGB') }})
    
