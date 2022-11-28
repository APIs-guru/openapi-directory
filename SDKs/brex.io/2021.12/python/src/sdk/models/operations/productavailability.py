from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductAvailabilityPathParams:
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductAvailabilitySecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductAvailabilityRequest:
    path_params: ProductAvailabilityPathParams = field()
    security: ProductAvailabilitySecurity = field()
    

@dataclass
class ProductAvailabilityResponse:
    content_type: str = field()
    status_code: int = field()
    product_availability_200_application_json_any: Optional[Any] = field(default=None)
    product_availability_default_application_json_any: Optional[Any] = field(default=None)
    
