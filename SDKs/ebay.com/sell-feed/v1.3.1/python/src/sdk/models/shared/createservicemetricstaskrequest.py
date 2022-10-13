from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customerservicemetricsfiltercriteria


@dataclass_json
@dataclass
class CreateServiceMetricsTaskRequest:
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    filter_criteria: Optional[customerservicemetricsfiltercriteria.CustomerServiceMetricsFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    
