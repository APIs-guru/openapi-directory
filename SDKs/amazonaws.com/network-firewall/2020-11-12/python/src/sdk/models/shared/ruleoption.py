from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RuleOption:
    keyword: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keyword' }})
    settings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    
