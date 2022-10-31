from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUploadSharePathParams:
    share_id: int = field(default=None, metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUploadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUploadShareRequest:
    path_params: UpdateUploadSharePathParams = field(default=None)
    headers: UpdateUploadShareHeaders = field(default=None)
    request: shared.UpdateUploadShareRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUploadShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    upload_share: Optional[shared.UploadShare] = field(default=None)
    update_upload_share_400_application_json_one_of: Optional[Any] = field(default=None)
    
