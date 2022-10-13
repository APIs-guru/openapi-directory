from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputconfig
from . import outputconfig
from . import stoppingcondition
from . import tag
from . import neovpcconfig


@dataclass_json
@dataclass
class CreateCompilationJobRequest:
    compilation_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    input_config: inputconfig.InputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfig' }})
    output_config: outputconfig.OutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_config: Optional[neovpcconfig.NeoVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
