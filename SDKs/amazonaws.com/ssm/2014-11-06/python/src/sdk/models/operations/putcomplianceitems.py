from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutComplianceItemsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_PUT_COMPLIANCE_ITEMS = "AmazonSSM.PutComplianceItems"


@dataclass
class PutComplianceItemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutComplianceItemsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutComplianceItemsRequest:
    headers: PutComplianceItemsHeaders = field(default=None)
    request: shared.PutComplianceItemsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutComplianceItemsResponse:
    compliance_type_count_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_item_content_exception: Optional[Any] = field(default=None)
    invalid_resource_id: Optional[Any] = field(default=None)
    invalid_resource_type: Optional[Any] = field(default=None)
    item_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    put_compliance_items_result: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    total_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    
