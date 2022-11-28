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
class UpdatePlaceIndexPathParams:
    index_name: str = field(metadata={'path_param': { 'field_name': 'IndexName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePlaceIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatePlaceIndexRequestBodyDataSourceConfiguration:
    r"""UpdatePlaceIndexRequestBodyDataSourceConfiguration
    <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href=\"https://aws.amazon.com/service-terms/\">AWS Service Terms</a> for Amazon Location Service.</p> </important>
    """
    
    intended_use: Optional[shared.IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntendedUse') }})
    
class UpdatePlaceIndexRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class UpdatePlaceIndexRequestBody:
    data_source_configuration: Optional[UpdatePlaceIndexRequestBodyDataSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceConfiguration') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pricing_plan: Optional[UpdatePlaceIndexRequestBodyPricingPlanEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    

@dataclass
class UpdatePlaceIndexRequest:
    headers: UpdatePlaceIndexHeaders = field()
    path_params: UpdatePlaceIndexPathParams = field()
    request: UpdatePlaceIndexRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePlaceIndexResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_place_index_response: Optional[shared.UpdatePlaceIndexResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
