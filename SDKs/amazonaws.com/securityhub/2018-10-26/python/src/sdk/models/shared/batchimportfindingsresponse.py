from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importfindingserror


@dataclass_json
@dataclass
class BatchImportFindingsResponse:
    failed_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedCount' }})
    failed_findings: Optional[List[importfindingserror.ImportFindingsError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedFindings' }})
    success_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessCount' }})
    
