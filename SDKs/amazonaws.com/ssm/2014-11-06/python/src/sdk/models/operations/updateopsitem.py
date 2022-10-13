from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateOpsItemXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_OPS_ITEM = "AmazonSSM.UpdateOpsItem"


@dataclass
class UpdateOpsItemHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateOpsItemXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateOpsItemRequest:
    headers: UpdateOpsItemHeaders = field(default=None)
    request: shared.UpdateOpsItemRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOpsItemResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    ops_item_already_exists_exception: Optional[Any] = field(default=None)
    ops_item_invalid_parameter_exception: Optional[Any] = field(default=None)
    ops_item_limit_exceeded_exception: Optional[Any] = field(default=None)
    ops_item_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_ops_item_response: Optional[dict[str, Any]] = field(default=None)
    
