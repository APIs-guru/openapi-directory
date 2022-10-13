from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConsumerMetadata:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_name' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_name' }})
    
