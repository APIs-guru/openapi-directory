from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum(str, Enum):
    SAGE_MAKER_GET_SAGEMAKER_SERVICECATALOG_PORTFOLIO_STATUS = "SageMaker.GetSagemakerServicecatalogPortfolioStatus"


@dataclass
class GetSagemakerServicecatalogPortfolioStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetSagemakerServicecatalogPortfolioStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSagemakerServicecatalogPortfolioStatusRequest:
    headers: GetSagemakerServicecatalogPortfolioStatusHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSagemakerServicecatalogPortfolioStatusResponse:
    content_type: str = field(default=None)
    get_sagemaker_servicecatalog_portfolio_status_output: Optional[shared.GetSagemakerServicecatalogPortfolioStatusOutput] = field(default=None)
    status_code: int = field(default=None)
    
