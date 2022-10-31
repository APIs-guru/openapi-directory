from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateContainerXAmzTargetEnum(str, Enum):
    MEDIA_STORE_20170901_CREATE_CONTAINER = "MediaStore_20170901.CreateContainer"


@dataclass
class CreateContainerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateContainerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateContainerRequest:
    headers: CreateContainerHeaders = field(default=None)
    request: shared.CreateContainerInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContainerResponse:
    container_in_use_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_container_output: Optional[shared.CreateContainerOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
