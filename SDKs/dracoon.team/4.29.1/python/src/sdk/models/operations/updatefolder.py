from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateFolderPathParams:
    folder_id: int = field(default=None, metadata={'path_param': { 'field_name': 'folder_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFolderHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class UpdateFolderRequest:
    path_params: UpdateFolderPathParams = field(default=None)
    headers: UpdateFolderHeaders = field(default=None)
    request: shared.UpdateFolderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFolderResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    status_code: int = field(default=None)
    
