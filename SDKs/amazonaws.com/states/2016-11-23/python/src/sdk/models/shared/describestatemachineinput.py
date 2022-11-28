from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeStateMachineInput:
    state_machine_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    
