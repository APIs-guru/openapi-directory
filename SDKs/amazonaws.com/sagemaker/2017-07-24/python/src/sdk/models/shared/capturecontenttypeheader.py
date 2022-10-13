from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CaptureContentTypeHeader:
    csv_content_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CsvContentTypes' }})
    json_content_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonContentTypes' }})
    
