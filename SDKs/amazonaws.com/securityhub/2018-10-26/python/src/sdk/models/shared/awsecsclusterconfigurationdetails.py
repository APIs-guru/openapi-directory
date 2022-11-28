from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsClusterConfigurationDetails:
    r"""AwsEcsClusterConfigurationDetails
    The run command configuration for the cluster.
    """
    
    execute_command_configuration: Optional[AwsEcsClusterConfigurationExecuteCommandConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecuteCommandConfiguration') }})
    
