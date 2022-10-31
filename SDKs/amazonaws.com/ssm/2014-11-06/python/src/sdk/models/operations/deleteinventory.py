from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteInventoryXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DELETE_INVENTORY = "AmazonSSM.DeleteInventory"


@dataclass
class DeleteInventoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteInventoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInventoryRequest:
    headers: DeleteInventoryHeaders = field(default=None)
    request: shared.DeleteInventoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteInventoryResponse:
    content_type: str = field(default=None)
    delete_inventory_result: Optional[shared.DeleteInventoryResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_delete_inventory_parameters_exception: Optional[Any] = field(default=None)
    invalid_inventory_request_exception: Optional[Any] = field(default=None)
    invalid_option_exception: Optional[Any] = field(default=None)
    invalid_type_name_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
