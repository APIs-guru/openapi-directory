from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GeneratePresignedUrlsPublicPathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsPublicHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GeneratePresignedUrlsPublicRequest:
    headers: GeneratePresignedUrlsPublicHeaders = field()
    path_params: GeneratePresignedUrlsPublicPathParams = field()
    request: shared.GeneratePresignedUrlsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GeneratePresignedUrlsPublicResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    presigned_url_list: Optional[shared.PresignedURLList] = field(default=None)
    
