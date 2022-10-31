from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
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
    intended_use: Optional[shared.IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntendedUse' }})
    
class CreatePlaceIndexRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclass
class CreatePlaceIndexRequestBody:
    data_source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    data_source_configuration: Optional[CreatePlaceIndexRequestBodyDataSourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceConfiguration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    pricing_plan: CreatePlaceIndexRequestBodyPricingPlanEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PricingPlan' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreatePlaceIndexRequest:
    headers: CreatePlaceIndexHeaders = field(default=None)
    request: CreatePlaceIndexRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePlaceIndexResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_place_index_response: Optional[shared.CreatePlaceIndexResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
