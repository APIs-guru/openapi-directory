from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppFlowConfig:
    r"""AppFlowConfig
    Details about an Amazon AppFlow flow datasource.
    """
    
    flow_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
