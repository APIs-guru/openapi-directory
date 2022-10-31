from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompleteFileUploadViaSharePathParams:
    access_key: str = field(default=None, metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadViaShareHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadViaShareRequest:
    path_params: CompleteFileUploadViaSharePathParams = field(default=None)
    headers: CompleteFileUploadViaShareHeaders = field(default=None)
    request: shared.UserFileKeyList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteFileUploadViaShareResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_uploaded_file_data: Optional[shared.PublicUploadedFileData] = field(default=None)
    status_code: int = field(default=None)
    
