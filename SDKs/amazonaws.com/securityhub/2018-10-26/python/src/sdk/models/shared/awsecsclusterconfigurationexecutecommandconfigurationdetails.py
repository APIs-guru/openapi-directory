from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails:
    r"""AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
    Contains the run command configuration for the cluster.
    """
    
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    log_configuration: Optional[AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogConfiguration') }})
    logging: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logging') }})
    
