from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ScanProvisionedProductsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_SCAN_PROVISIONED_PRODUCTS = "AWS242ServiceCatalogService.ScanProvisionedProducts"


@dataclass
class ScanProvisionedProductsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ScanProvisionedProductsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ScanProvisionedProductsRequest:
    headers: ScanProvisionedProductsHeaders = field(default=None)
    request: shared.ScanProvisionedProductsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScanProvisionedProductsResponse:
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    scan_provisioned_products_output: Optional[shared.ScanProvisionedProductsOutput] = field(default=None)
    status_code: int = field(default=None)
    
