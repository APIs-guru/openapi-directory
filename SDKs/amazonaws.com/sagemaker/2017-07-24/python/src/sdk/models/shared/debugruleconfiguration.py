from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import processinginstancetype_enum


@dataclass_json
@dataclass
class DebugRuleConfiguration:
    instance_type: Optional[processinginstancetype_enum.ProcessingInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    rule_configuration_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleConfigurationName' }})
    rule_evaluator_image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleEvaluatorImage' }})
    rule_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleParameters' }})
    s3_output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSizeInGB' }})
    
