from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Destiny2EquipItemsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2EquipItemsRequest:
    security: Destiny2EquipItemsSecurity = field()
    

@dataclass
class Destiny2EquipItemsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
