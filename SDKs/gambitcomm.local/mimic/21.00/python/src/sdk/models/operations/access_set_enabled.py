from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessSetEnabledPathParams:
    enabled_or_not: str = field(metadata={'path_param': { 'field_name': 'enabledOrNot', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessSetEnabledRequest:
    path_params: AccessSetEnabledPathParams = field()
    

@dataclass
class AccessSetEnabledResponse:
    content_type: str = field()
    status_code: int = field()
    access_set_enabled_200_application_json_string: Optional[str] = field(default=None)
    
