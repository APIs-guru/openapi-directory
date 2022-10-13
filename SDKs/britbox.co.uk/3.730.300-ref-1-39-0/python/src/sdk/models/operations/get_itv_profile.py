from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetItvProfileQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvProfileSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItvProfileRequest:
    query_params: GetItvProfileQueryParams = field(default=None)
    security: GetItvProfileSecurity = field(default=None)
    

@dataclass
class GetItvProfileResponse:
    content_type: str = field(default=None)
    get_itv_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
