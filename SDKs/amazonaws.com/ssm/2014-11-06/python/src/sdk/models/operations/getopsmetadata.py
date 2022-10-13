from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetOpsMetadataXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_OPS_METADATA = "AmazonSSM.GetOpsMetadata"


@dataclass
class GetOpsMetadataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOpsMetadataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOpsMetadataRequest:
    headers: GetOpsMetadataHeaders = field(default=None)
    request: shared.GetOpsMetadataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOpsMetadataResponse:
    content_type: str = field(default=None)
    get_ops_metadata_result: Optional[shared.GetOpsMetadataResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    ops_metadata_invalid_argument_exception: Optional[Any] = field(default=None)
    ops_metadata_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
