from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3resourceclassification


@dataclass_json
@dataclass
class ListS3ResourcesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    s3_resources: Optional[List[s3resourceclassification.S3ResourceClassification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Resources' }})
    
