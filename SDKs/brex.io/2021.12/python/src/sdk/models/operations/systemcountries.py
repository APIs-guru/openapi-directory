from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class SystemCountriesSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SystemCountriesRequest:
    security: SystemCountriesSecurity = field(default=None)
    

@dataclass
class SystemCountriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_countries_200_application_json_anies: Optional[List[Any]] = field(default=None)
    system_countries_default_application_json_any: Optional[Any] = field(default=None)
    
