from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails:
    log_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogDriver' }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    secret_options: Optional[List[awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails.AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretOptions' }})
    
