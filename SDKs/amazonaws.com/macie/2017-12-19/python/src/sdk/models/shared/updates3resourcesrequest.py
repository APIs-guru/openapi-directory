from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3resourceclassificationupdate


@dataclass_json
@dataclass
class UpdateS3ResourcesRequest:
    member_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberAccountId' }})
    s3_resources_update: List[s3resourceclassificationupdate.S3ResourceClassificationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3ResourcesUpdate' }})
    
