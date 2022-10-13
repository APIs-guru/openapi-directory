from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessrules


@dataclass_json
@dataclass
class UpdateBucketRequest:
    access_rules: Optional[accessrules.AccessRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessRules' }})
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    readonly_access_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyAccessAccounts' }})
    versioning: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioning' }})
    
