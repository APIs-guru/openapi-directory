from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AcceptPortfolioShareXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE = "AWS242ServiceCatalogService.AcceptPortfolioShare"


@dataclass
class AcceptPortfolioShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AcceptPortfolioShareXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AcceptPortfolioShareRequest:
    headers: AcceptPortfolioShareHeaders = field(default=None)
    request: shared.AcceptPortfolioShareInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AcceptPortfolioShareResponse:
    accept_portfolio_share_output: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
