from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_settings: Optional[NetworkSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkSettings') }})
    split: Optional[TrafficSplit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('split') }})
    
