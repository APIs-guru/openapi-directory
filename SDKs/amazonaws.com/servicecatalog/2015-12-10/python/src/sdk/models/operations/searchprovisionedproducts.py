from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class SearchProvisionedProductsQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class SearchProvisionedProductsXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PROVISIONED_PRODUCTS = "AWS242ServiceCatalogService.SearchProvisionedProducts"


@dataclass
class SearchProvisionedProductsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SearchProvisionedProductsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SearchProvisionedProductsRequest:
    query_params: SearchProvisionedProductsQueryParams = field(default=None)
    headers: SearchProvisionedProductsHeaders = field(default=None)
    request: shared.SearchProvisionedProductsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchProvisionedProductsResponse:
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    search_provisioned_products_output: Optional[shared.SearchProvisionedProductsOutput] = field(default=None)
    status_code: int = field(default=None)
    
