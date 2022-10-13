from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grant


@dataclass_json
@dataclass
class GetGrantResponse:
    grant: Optional[grant.Grant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grant' }})
    
