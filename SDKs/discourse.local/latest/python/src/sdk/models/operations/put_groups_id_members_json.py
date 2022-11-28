from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutGroupsIDMembersJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupsIDMembersJSONRequest:
    path_params: PutGroupsIDMembersJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGroupsIDMembersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_groups_id_members_json_200_application_json_any: Optional[Any] = field(default=None)
    
