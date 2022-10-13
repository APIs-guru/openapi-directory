from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceerror


@dataclass_json
@dataclass
class DescribeServiceErrorsResult:
    service_errors: Optional[List[serviceerror.ServiceError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceErrors' }})
    
