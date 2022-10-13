from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecsclusterconfigurationexecutecommandconfigurationdetails


@dataclass_json
@dataclass
class AwsEcsClusterConfigurationDetails:
    execute_command_configuration: Optional[awsecsclusterconfigurationexecutecommandconfigurationdetails.AwsEcsClusterConfigurationExecuteCommandConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecuteCommandConfiguration' }})
    
