from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCSlugIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCSlugIDJSONRequest:
    path_params: GetCSlugIDJSONPathParams = field(default=None)
    

@dataclass
class GetCSlugIDJSONResponse:
    content_type: str = field(default=None)
    get_c_slug_id_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
