from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFoodBrandedBarcodePhpQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodBrandedBarcodePhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodBrandedBarcodePhpRequest:
    query_params: GetFoodBrandedBarcodePhpQueryParams = field()
    security: GetFoodBrandedBarcodePhpSecurity = field()
    

@dataclass
class GetFoodBrandedBarcodePhpResponse:
    content_type: str = field()
    status_code: int = field()
    branded_food_object: Optional[shared.BrandedFoodObject] = field(default=None)
    
