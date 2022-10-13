from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumermetadata
from . import requestcountallocation
from . import links
from . import meta


@dataclass_json
@dataclass
class GetConsumersResponseData:
    aggregated_request_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregated_request_count' }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer_id' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    metadata: Optional[consumermetadata.ConsumerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_count_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_count_updated' }})
    request_counts: Optional[requestcountallocation.RequestCountAllocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_counts' }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    

@dataclass_json
@dataclass
class GetConsumersResponse:
    data: List[GetConsumersResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
