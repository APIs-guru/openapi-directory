from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import daterangevalues


@dataclass_json
@dataclass
class ReportRow:
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metrics: Optional[List[daterangevalues.DateRangeValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
