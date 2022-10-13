from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthstatusfilter_enum


@dataclass_json
@dataclass
class DiscoverInstancesRequest:
    health_status: Optional[healthstatusfilter_enum.HealthStatusFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthStatus' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    namespace_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamespaceName' }})
    optional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionalParameters' }})
    query_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryParameters' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
