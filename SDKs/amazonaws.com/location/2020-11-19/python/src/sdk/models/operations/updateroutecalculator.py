from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRouteCalculatorPathParams:
    calculator_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CalculatorName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteCalculatorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateRouteCalculatorRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class UpdateRouteCalculatorRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    pricing_plan: Optional[UpdateRouteCalculatorRequestBodyPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    

@dataclass
class UpdateRouteCalculatorRequest:
    path_params: UpdateRouteCalculatorPathParams = field(default=None)
    headers: UpdateRouteCalculatorHeaders = field(default=None)
    request: UpdateRouteCalculatorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteCalculatorResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_route_calculator_response: Optional[shared.UpdateRouteCalculatorResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
