from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdatePlaceIndexPathParams:
    index_name: str = field(default=None, metadata={'path_param': { 'field_name': 'IndexName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePlaceIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdatePlaceIndexRequestBodyDataSourceConfiguration:
    intended_use: Optional[shared.IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntendedUse' }})
    
class UpdatePlaceIndexRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class UpdatePlaceIndexRequestBody:
    data_source_configuration: Optional[UpdatePlaceIndexRequestBodyDataSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceConfiguration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    pricing_plan: Optional[UpdatePlaceIndexRequestBodyPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    

@dataclass
class UpdatePlaceIndexRequest:
    path_params: UpdatePlaceIndexPathParams = field(default=None)
    headers: UpdatePlaceIndexHeaders = field(default=None)
    request: UpdatePlaceIndexRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePlaceIndexResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_place_index_response: Optional[shared.UpdatePlaceIndexResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
