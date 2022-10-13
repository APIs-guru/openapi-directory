from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveDownloadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveDownloadShareRequest:
    path_params: RemoveDownloadSharePathParams = field(default=None)
    headers: RemoveDownloadShareHeaders = field(default=None)
    

@dataclass
class RemoveDownloadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
