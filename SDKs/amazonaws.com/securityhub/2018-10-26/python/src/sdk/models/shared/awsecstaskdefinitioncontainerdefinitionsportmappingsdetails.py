from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
    A port mapping for the container.
    """
    
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerPort') }})
    host_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostPort') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
