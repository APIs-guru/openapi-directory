from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errordetail
from . import batchpermissionsrequestentry


@dataclass_json
@dataclass
class BatchPermissionsFailureEntry:
    error: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    request_entry: Optional[batchpermissionsrequestentry.BatchPermissionsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestEntry' }})
    
