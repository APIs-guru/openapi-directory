from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodBrandedBarcodePhpQueryParams:
    code: str = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodBrandedBarcodePhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodBrandedBarcodePhpRequest:
    query_params: GetFoodBrandedBarcodePhpQueryParams = field(default=None)
    security: GetFoodBrandedBarcodePhpSecurity = field(default=None)
    

@dataclass
class GetFoodBrandedBarcodePhpResponse:
    branded_food_object: Optional[shared.BrandedFoodObject] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
