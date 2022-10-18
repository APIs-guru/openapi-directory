from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumerconnection
from . import consumermetadata
from . import requestcountallocation


@dataclass_json
@dataclass
class Consumer:
    aggregated_request_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregated_request_count' }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    connections: Optional[List[consumerconnection.ConsumerConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer_id' }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    metadata: Optional[consumermetadata.ConsumerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_count_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_count_updated' }})
    request_counts: Optional[requestcountallocation.RequestCountAllocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_counts' }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
