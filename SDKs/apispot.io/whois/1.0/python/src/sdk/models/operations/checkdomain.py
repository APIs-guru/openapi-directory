from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CheckDomainPathParams:
    domain: str = field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CheckDomain200ApplicationJSON:
    is_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAvailable') }})
    

@dataclass
class CheckDomainRequest:
    path_params: CheckDomainPathParams = field()
    

@dataclass
class CheckDomainResponse:
    content_type: str = field()
    status_code: int = field()
    check_domain_200_application_json_object: Optional[CheckDomain200ApplicationJSON] = field(default=None)
    
