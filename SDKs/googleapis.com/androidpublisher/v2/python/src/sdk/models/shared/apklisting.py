from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApkListing:
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    recent_changes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentChanges' }})
    
