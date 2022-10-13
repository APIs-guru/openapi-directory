from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SecurityReportQueryMetric:
    aggregation_function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationFunction' }})
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
