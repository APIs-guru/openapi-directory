from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class DisableSagemakerServicecatalogPortfolioXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DISABLE_SAGEMAKER_SERVICECATALOG_PORTFOLIO = "SageMaker.DisableSagemakerServicecatalogPortfolio"


@dataclass
class DisableSagemakerServicecatalogPortfolioHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DisableSagemakerServicecatalogPortfolioXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DisableSagemakerServicecatalogPortfolioRequest:
    headers: DisableSagemakerServicecatalogPortfolioHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisableSagemakerServicecatalogPortfolioResponse:
    content_type: str = field(default=None)
    disable_sagemaker_servicecatalog_portfolio_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
