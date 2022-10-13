from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportmetadata


@dataclass_json
@dataclass
class ReportMetadatas:
    report_metadata: Optional[List[reportmetadata.ReportMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportMetadata' }})
    
