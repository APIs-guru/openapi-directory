from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCompilationJobRequest:
    compilation_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobName') }})
    input_config: InputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputConfig') }})
    output_config: OutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_config: Optional[NeoVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
