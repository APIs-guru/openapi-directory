from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductAvailabilityPathParams:
    sku: str = field(default=None, metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductAvailabilitySecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductAvailabilityRequest:
    path_params: ProductAvailabilityPathParams = field(default=None)
    security: ProductAvailabilitySecurity = field(default=None)
    

@dataclass
class ProductAvailabilityResponse:
    content_type: str = field(default=None)
    product_availability_200_application_json_any: Optional[Any] = field(default=None)
    product_availability_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
