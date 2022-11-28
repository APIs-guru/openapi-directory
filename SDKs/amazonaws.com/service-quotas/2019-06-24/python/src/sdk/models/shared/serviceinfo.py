from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceInfo:
    r"""ServiceInfo
    Information about a service.
    """
    
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    
