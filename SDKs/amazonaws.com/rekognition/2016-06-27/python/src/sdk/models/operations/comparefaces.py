from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CompareFacesXAmzTargetEnum(str, Enum):
    REKOGNITION_SERVICE_COMPARE_FACES = "RekognitionService.CompareFaces"


@dataclass
class CompareFacesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CompareFacesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CompareFacesRequest:
    headers: CompareFacesHeaders = field(default=None)
    request: shared.CompareFacesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompareFacesResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    compare_faces_response: Optional[shared.CompareFacesResponse] = field(default=None)
    content_type: str = field(default=None)
    image_too_large_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_image_format_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
