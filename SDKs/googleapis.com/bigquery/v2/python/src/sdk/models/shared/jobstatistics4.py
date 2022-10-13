from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobStatistics4:
    destination_uri_file_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationUriFileCounts' }})
    input_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputBytes' }})
    
