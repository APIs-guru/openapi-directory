from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutCategoriesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCategoriesIDJSONRequest:
    path_params: PutCategoriesIDJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCategoriesIDJSONResponse:
    content_type: str = field(default=None)
    put_categories_id_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
