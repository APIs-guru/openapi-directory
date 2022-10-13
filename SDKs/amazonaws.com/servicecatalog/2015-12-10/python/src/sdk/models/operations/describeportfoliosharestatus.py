from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribePortfolioShareStatusXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_DESCRIBE_PORTFOLIO_SHARE_STATUS = "AWS242ServiceCatalogService.DescribePortfolioShareStatus"


@dataclass
class DescribePortfolioShareStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribePortfolioShareStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribePortfolioShareStatusRequest:
    headers: DescribePortfolioShareStatusHeaders = field(default=None)
    request: shared.DescribePortfolioShareStatusInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribePortfolioShareStatusResponse:
    content_type: str = field(default=None)
    describe_portfolio_share_status_output: Optional[shared.DescribePortfolioShareStatusOutput] = field(default=None)
    invalid_parameters_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
