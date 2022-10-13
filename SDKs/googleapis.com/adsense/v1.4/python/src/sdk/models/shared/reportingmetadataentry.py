from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportingMetadataEntry:
    compatible_dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleDimensions' }})
    compatible_metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleMetrics' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    required_dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredDimensions' }})
    required_metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredMetrics' }})
    supported_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedProducts' }})
    
