from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import faileds3resource


@dataclass_json
@dataclass
class AssociateS3ResourcesResult:
    failed_s3_resources: Optional[List[faileds3resource.FailedS3Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedS3Resources' }})
    
