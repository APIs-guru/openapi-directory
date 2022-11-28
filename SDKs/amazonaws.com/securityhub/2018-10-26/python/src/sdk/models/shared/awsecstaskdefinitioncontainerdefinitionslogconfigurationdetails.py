from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
    The log configuration specification for the container.
    """
    
    log_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDriver') }})
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    secret_options: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretOptions') }})
    
