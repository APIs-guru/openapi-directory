from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails


@dataclass_json
@dataclass
class AwsEcsClusterConfigurationExecuteCommandConfigurationDetails:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    log_configuration: Optional[awsecsclusterconfigurationexecutecommandconfigurationlogconfigurationdetails.AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogConfiguration' }})
    logging: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logging' }})
    
