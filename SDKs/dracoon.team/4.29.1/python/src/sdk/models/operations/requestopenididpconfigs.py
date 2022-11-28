from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestOpenIDIdpConfigsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOpenIDIdpConfigsRequest:
    headers: RequestOpenIDIdpConfigsHeaders = field()
    

@dataclass
class RequestOpenIDIdpConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_idp_configs: Optional[List[shared.OpenIDIdpConfig]] = field(default=None)
    
