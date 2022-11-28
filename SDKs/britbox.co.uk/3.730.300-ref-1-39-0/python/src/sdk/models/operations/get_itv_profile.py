from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetItvProfileQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvProfileSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItvProfileRequest:
    query_params: GetItvProfileQueryParams = field()
    security: GetItvProfileSecurity = field()
    

@dataclass
class GetItvProfileResponse:
    content_type: str = field()
    status_code: int = field()
    get_itv_profile_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
