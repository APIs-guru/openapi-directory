from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destination
from . import detail
from . import itemrouting
from . import detail


@dataclass_json
@dataclass
class Report:
    destination_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCount' }})
    destinations: Optional[List[destination.Destination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCount' }})
    errors: Optional[List[detail.Detail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    report_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportItemCount' }})
    routing: Optional[List[itemrouting.ItemRouting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    warning_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warningCount' }})
    warnings: Optional[List[detail.Detail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
