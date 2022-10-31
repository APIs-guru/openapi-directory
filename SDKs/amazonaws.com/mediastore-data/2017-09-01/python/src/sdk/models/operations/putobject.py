from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutObjectPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'Path', 'style': 'simple', 'explode': False }})
    
class PutObjectXAmzStorageClassEnum(str, Enum):
    TEMPORAL = "TEMPORAL"

class PutObjectXAmzUploadAvailabilityEnum(str, Enum):
    STANDARD = "STANDARD"
    STREAMING = "STREAMING"


@dataclass
class PutObjectHeaders:
    cache_control: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Cache-Control', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_storage_class: Optional[PutObjectXAmzStorageClassEnum] = field(default=None, metadata={'header': { 'field_name': 'x-amz-storage-class', 'style': 'simple', 'explode': False }})
    x_amz_upload_availability: Optional[PutObjectXAmzUploadAvailabilityEnum] = field(default=None, metadata={'header': { 'field_name': 'x-amz-upload-availability', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutObjectRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    

@dataclass
class PutObjectRequest:
    path_params: PutObjectPathParams = field(default=None)
    headers: PutObjectHeaders = field(default=None)
    request: PutObjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutObjectResponse:
    container_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    put_object_response: Optional[shared.PutObjectResponse] = field(default=None)
    status_code: int = field(default=None)
    
