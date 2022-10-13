from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoAccountingHitOptions:
    hide_referrer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideReferrer' }, 'form': { 'field_name': 'hideReferrer' }})
    
