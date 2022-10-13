from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3resource


@dataclass_json
@dataclass
class DisassociateS3ResourcesRequest:
    associated_s3_resources: List[s3resource.S3Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedS3Resources' }})
    member_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberAccountId' }})
    
