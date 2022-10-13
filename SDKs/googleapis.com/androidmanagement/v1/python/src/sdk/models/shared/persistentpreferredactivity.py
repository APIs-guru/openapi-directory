from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersistentPreferredActivity:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    receiver_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverActivity' }})
    
