from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGeofenceCollectionPathParams:
    collection_name: str = field(default=None, metadata={'path_param': { 'field_name': 'CollectionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGeofenceCollectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateGeofenceCollectionRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class UpdateGeofenceCollectionRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    pricing_plan: Optional[UpdateGeofenceCollectionRequestBodyPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    pricing_plan_data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlanDataSource' }})
    

@dataclass
class UpdateGeofenceCollectionRequest:
    path_params: UpdateGeofenceCollectionPathParams = field(default=None)
    headers: UpdateGeofenceCollectionHeaders = field(default=None)
    request: UpdateGeofenceCollectionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGeofenceCollectionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_geofence_collection_response: Optional[shared.UpdateGeofenceCollectionResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
