from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SystemPricelistSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SystemPricelistRequest:
    security: SystemPricelistSecurity = field(default=None)
    

@dataclass
class SystemPricelistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_pricelist_200_application_json_anies: Optional[List[Any]] = field(default=None)
    system_pricelist_default_application_json_any: Optional[Any] = field(default=None)
    
