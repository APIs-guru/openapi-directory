from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userfilekey


@dataclass_json
@dataclass
class UserFileKeyList:
    items: Optional[List[userfilekey.UserFileKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
