from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportingmetadataentry


@dataclass_json
@dataclass
class Metadata:
    items: Optional[List[reportingmetadataentry.ReportingMetadataEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
