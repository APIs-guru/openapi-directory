from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendUploadShareLinkViaEmailPathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendUploadShareLinkViaEmailHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class SendUploadShareLinkViaEmailRequest:
    path_params: SendUploadShareLinkViaEmailPathParams = field(default=None)
    headers: SendUploadShareLinkViaEmailHeaders = field(default=None)
    request: shared.UploadShareLinkEmail = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendUploadShareLinkViaEmailResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
