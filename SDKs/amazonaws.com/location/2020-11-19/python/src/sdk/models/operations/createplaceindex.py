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
class CreatePlaceIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreatePlaceIndexRequestBodyDataSourceConfiguration:
    r"""CreatePlaceIndexRequestBodyDataSourceConfiguration
    <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href=\"https://aws.amazon.com/service-terms/\">AWS Service Terms</a> for Amazon Location Service.</p> </important>
    """
    
    intended_use: Optional[shared.IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntendedUse') }})
    
class CreatePlaceIndexRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class CreatePlaceIndexRequestBody:
    data_source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    pricing_plan: CreatePlaceIndexRequestBodyPricingPlanEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    data_source_configuration: Optional[CreatePlaceIndexRequestBodyDataSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceConfiguration') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreatePlaceIndexRequest:
    headers: CreatePlaceIndexHeaders = field()
    request: CreatePlaceIndexRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePlaceIndexResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_place_index_response: Optional[shared.CreatePlaceIndexResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
