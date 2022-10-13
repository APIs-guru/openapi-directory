from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesskey


@dataclass_json
@dataclass
class GetBucketAccessKeysResult:
    access_keys: Optional[List[accesskey.AccessKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeys' }})
    
