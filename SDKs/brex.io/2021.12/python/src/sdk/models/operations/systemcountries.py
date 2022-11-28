from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SystemCountriesSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SystemCountriesRequest:
    security: SystemCountriesSecurity = field()
    

@dataclass
class SystemCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    system_countries_200_application_json_anies: Optional[List[Any]] = field(default=None)
    system_countries_default_application_json_any: Optional[Any] = field(default=None)
    
