from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TerminateProvisionedProductXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_TERMINATE_PROVISIONED_PRODUCT = "AWS242ServiceCatalogService.TerminateProvisionedProduct"


@dataclass
class TerminateProvisionedProductHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: TerminateProvisionedProductXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class TerminateProvisionedProductRequest:
    headers: TerminateProvisionedProductHeaders = field(default=None)
    request: shared.TerminateProvisionedProductInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TerminateProvisionedProductResponse:
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    terminate_provisioned_product_output: Optional[shared.TerminateProvisionedProductOutput] = field(default=None)
    
