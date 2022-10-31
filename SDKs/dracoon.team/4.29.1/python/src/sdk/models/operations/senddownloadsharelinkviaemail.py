from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendDownloadShareLinkViaEmailPathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendDownloadShareLinkViaEmailHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendDownloadShareLinkViaEmailRequest:
    path_params: SendDownloadShareLinkViaEmailPathParams = field(default=None)
    headers: SendDownloadShareLinkViaEmailHeaders = field(default=None)
    request: shared.DownloadShareLinkEmail = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendDownloadShareLinkViaEmailResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
