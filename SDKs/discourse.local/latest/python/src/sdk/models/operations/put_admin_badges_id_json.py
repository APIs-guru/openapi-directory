from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAdminBadgesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminBadgesIDJSONRequest:
    path_params: PutAdminBadgesIDJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAdminBadgesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_admin_badges_id_json_200_application_json_any: Optional[Any] = field(default=None)
    
