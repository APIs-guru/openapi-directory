from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engagement


@dataclass_json
@dataclass
class ListEngagementsResult:
    engagements: List[engagement.Engagement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Engagements' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
