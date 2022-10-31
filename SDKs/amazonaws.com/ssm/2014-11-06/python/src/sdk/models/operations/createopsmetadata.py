from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateOpsMetadataXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CREATE_OPS_METADATA = "AmazonSSM.CreateOpsMetadata"


@dataclass
class CreateOpsMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateOpsMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOpsMetadataRequest:
    headers: CreateOpsMetadataHeaders = field(default=None)
    request: shared.CreateOpsMetadataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOpsMetadataResponse:
    content_type: str = field(default=None)
    create_ops_metadata_result: Optional[shared.CreateOpsMetadataResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    ops_metadata_already_exists_exception: Optional[Any] = field(default=None)
    ops_metadata_invalid_argument_exception: Optional[Any] = field(default=None)
    ops_metadata_limit_exceeded_exception: Optional[Any] = field(default=None)
    ops_metadata_too_many_updates_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
