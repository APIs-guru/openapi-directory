from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SearchFacesByImageXAmzTargetEnum(str, Enum):
    REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE = "RekognitionService.SearchFacesByImage"


@dataclass
class SearchFacesByImageHeaders:
    x_amz_target: SearchFacesByImageXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchFacesByImageRequest:
    headers: SearchFacesByImageHeaders = field()
    request: shared.SearchFacesByImageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchFacesByImageResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    image_too_large_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_image_format_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    search_faces_by_image_response: Optional[shared.SearchFacesByImageResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
