from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreativeDealAssociation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    deals_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealsId' }})
    
