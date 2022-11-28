from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPInstanceSummary:
    r"""HTTPInstanceSummary
    In a response to a <a href=\"https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html\">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    health_status: Optional[HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthStatus') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceName') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    
