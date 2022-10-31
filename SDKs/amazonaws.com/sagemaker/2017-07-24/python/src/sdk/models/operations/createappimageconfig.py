from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateAppImageConfigXAmzTargetEnum(str, Enum):
    SAGE_MAKER_CREATE_APP_IMAGE_CONFIG = "SageMaker.CreateAppImageConfig"


@dataclass
class CreateAppImageConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateAppImageConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAppImageConfigRequest:
    headers: CreateAppImageConfigHeaders = field(default=None)
    request: shared.CreateAppImageConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAppImageConfigResponse:
    content_type: str = field(default=None)
    create_app_image_config_response: Optional[shared.CreateAppImageConfigResponse] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
