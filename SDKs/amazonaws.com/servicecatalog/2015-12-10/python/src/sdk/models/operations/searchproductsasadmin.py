from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class SearchProductsAsAdminQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class SearchProductsAsAdminXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_SEARCH_PRODUCTS_AS_ADMIN = "AWS242ServiceCatalogService.SearchProductsAsAdmin"


@dataclass
class SearchProductsAsAdminHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SearchProductsAsAdminXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchProductsAsAdminRequest:
    query_params: SearchProductsAsAdminQueryParams = field(default=None)
    headers: SearchProductsAsAdminHeaders = field(default=None)
    request: shared.SearchProductsAsAdminInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchProductsAsAdminResponse:
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    search_products_as_admin_output: Optional[shared.SearchProductsAsAdminOutput] = field(default=None)
    status_code: int = field(default=None)
    
