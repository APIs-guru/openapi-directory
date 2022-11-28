from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutCategoriesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCategoriesIDJSONRequest:
    path_params: PutCategoriesIDJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCategoriesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_categories_id_json_200_application_json_any: Optional[Any] = field(default=None)
    
