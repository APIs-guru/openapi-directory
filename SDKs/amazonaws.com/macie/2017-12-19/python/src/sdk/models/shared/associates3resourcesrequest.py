from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3resourceclassification


@dataclass_json
@dataclass
class AssociateS3ResourcesRequest:
    member_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberAccountId' }})
    s3_resources: List[s3resourceclassification.S3ResourceClassification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Resources' }})
    
