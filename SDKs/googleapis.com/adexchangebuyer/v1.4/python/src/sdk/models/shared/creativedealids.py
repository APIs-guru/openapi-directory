from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreativeDealIdsDealStatuses:
    arc_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arcStatus' }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealId' }})
    web_property_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyId' }})
    

@dataclass_json
@dataclass
class CreativeDealIds:
    deal_statuses: Optional[List[CreativeDealIdsDealStatuses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealStatuses' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
