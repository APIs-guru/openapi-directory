from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Container:
    r"""Container
    Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    ports: Optional[dict[str, ContainerServiceProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
