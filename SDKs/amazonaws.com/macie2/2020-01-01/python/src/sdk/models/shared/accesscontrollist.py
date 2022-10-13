from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessControlList:
    allows_public_read_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsPublicReadAccess' }})
    allows_public_write_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsPublicWriteAccess' }})
    
