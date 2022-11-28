from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    health_check_custom_config: Optional[HealthCheckCustomConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckCustomConfig') }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    type: Optional[ServiceTypeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
