from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompleteFileUploadViaSharePathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadViaShareHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadViaShareRequest:
    headers: CompleteFileUploadViaShareHeaders = field()
    path_params: CompleteFileUploadViaSharePathParams = field()
    request: shared.UserFileKeyList = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteFileUploadViaShareResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_uploaded_file_data: Optional[shared.PublicUploadedFileData] = field(default=None)
    
