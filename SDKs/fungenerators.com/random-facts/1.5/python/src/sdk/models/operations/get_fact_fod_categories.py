from dataclasses import dataclass, field



@dataclass
class GetFactFodCategoriesSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactFodCategoriesRequest:
    security: GetFactFodCategoriesSecurity = field(default=None)
    

@dataclass
class GetFactFodCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
