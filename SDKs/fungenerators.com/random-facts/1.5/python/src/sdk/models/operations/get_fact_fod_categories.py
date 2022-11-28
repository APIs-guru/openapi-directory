from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetFactFodCategoriesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactFodCategoriesRequest:
    security: GetFactFodCategoriesSecurity = field()
    

@dataclass
class GetFactFodCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    
