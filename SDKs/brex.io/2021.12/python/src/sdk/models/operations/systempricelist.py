from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SystemPricelistSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SystemPricelistRequest:
    security: SystemPricelistSecurity = field()
    

@dataclass
class SystemPricelistResponse:
    content_type: str = field()
    status_code: int = field()
    system_pricelist_200_application_json_anies: Optional[List[Any]] = field(default=None)
    system_pricelist_default_application_json_any: Optional[Any] = field(default=None)
    
