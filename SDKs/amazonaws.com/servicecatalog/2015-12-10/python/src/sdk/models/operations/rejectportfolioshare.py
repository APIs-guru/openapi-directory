from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RejectPortfolioShareXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_REJECT_PORTFOLIO_SHARE = "AWS242ServiceCatalogService.RejectPortfolioShare"


@dataclass
class RejectPortfolioShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RejectPortfolioShareXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RejectPortfolioShareRequest:
    headers: RejectPortfolioShareHeaders = field(default=None)
    request: shared.RejectPortfolioShareInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectPortfolioShareResponse:
    content_type: str = field(default=None)
    reject_portfolio_share_output: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
