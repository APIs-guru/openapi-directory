from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyListEntry:
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyArn' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    
