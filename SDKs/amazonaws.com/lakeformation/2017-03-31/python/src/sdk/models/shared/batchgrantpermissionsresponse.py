from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchpermissionsfailureentry


@dataclass_json
@dataclass
class BatchGrantPermissionsResponse:
    failures: Optional[List[batchpermissionsfailureentry.BatchPermissionsFailureEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failures' }})
    
