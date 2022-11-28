from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortMapping:
    r"""PortMapping
    An object representing a port mapping.
    """
    
    application_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationPort') }})
    job_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobPort') }})
    enable_on_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOnPublicIp') }})
    
