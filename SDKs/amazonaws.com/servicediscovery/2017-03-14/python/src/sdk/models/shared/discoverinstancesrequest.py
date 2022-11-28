from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DiscoverInstancesRequest:
    namespace_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceName') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    health_status: Optional[HealthStatusFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthStatus') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    optional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionalParameters') }})
    query_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryParameters') }})
    
