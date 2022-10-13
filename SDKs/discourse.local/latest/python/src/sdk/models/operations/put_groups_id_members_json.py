from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutGroupsIDMembersJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupsIDMembersJSONRequest:
    path_params: PutGroupsIDMembersJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGroupsIDMembersJSONResponse:
    content_type: str = field(default=None)
    put_groups_id_members_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
