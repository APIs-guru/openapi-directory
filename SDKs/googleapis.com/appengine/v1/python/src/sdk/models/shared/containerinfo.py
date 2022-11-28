from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContainerInfo:
    r"""ContainerInfo
    Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
    """
    
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
