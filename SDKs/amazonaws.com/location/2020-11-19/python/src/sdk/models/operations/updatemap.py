from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateMapPathParams:
    map_name: str = field(metadata={'path_param': { 'field_name': 'MapName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMapHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateMapRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class UpdateMapRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: Optional[UpdateMapRequestBodyPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    

@dataclass
class UpdateMapRequest:
    headers: UpdateMapHeaders = field()
    path_params: UpdateMapPathParams = field()
    request: UpdateMapRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMapResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_map_response: Optional[shared.UpdateMapResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
