from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryMetadata:
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    end_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimestamp' }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFormat' }})
    start_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp' }})
    time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnit' }})
    
