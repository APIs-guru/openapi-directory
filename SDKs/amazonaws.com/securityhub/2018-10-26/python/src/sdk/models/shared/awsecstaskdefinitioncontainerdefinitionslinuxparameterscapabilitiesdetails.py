from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
    The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
    """
    
    add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Add') }})
    drop: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Drop') }})
    
