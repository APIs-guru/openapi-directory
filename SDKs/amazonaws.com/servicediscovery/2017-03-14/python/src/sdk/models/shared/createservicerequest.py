from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dnsconfig
from . import healthcheckconfig
from . import healthcheckcustomconfig
from . import tag
from . import servicetypeoption_enum


@dataclass_json
@dataclass
class CreateServiceRequest:
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dns_config: Optional[dnsconfig.DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsConfig' }})
    health_check_config: Optional[healthcheckconfig.HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfig' }})
    health_check_custom_config: Optional[healthcheckcustomconfig.HealthCheckCustomConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckCustomConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamespaceId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: Optional[servicetypeoption_enum.ServiceTypeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
