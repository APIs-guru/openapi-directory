from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderfiltercriteria


@dataclass_json
@dataclass
class CreateOrderTaskRequest:
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    filter_criteria: Optional[orderfiltercriteria.OrderFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    
