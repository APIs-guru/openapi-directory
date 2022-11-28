from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetRequest:
    path_params: OrgsGetPathParams = field()
    

@dataclass
class OrgsGetResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    organization_full: Optional[shared.OrganizationFull] = field(default=None)
    
