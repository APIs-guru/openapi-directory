from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class CheckDomainPathParams:
    domain: str = field(default=None, metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckDomainRequest:
    path_params: CheckDomainPathParams = field(default=None)
    

@dataclass_json
@dataclass
class CheckDomain200ApplicationJSON:
    is_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAvailable' }})
    

@dataclass
class CheckDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_domain_200_application_json_object: Optional[CheckDomain200ApplicationJSON] = field(default=None)
    
