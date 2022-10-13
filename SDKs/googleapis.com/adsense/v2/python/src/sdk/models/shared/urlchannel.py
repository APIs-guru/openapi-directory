from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class URLChannel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reporting_dimension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingDimensionId' }})
    uri_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uriPattern' }})
    
