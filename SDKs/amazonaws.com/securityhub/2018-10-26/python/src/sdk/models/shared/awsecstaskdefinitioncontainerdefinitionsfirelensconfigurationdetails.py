from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails
    The FireLens configuration for the container. The configuration specifies and configures a log router for container logs.
    """
    
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
