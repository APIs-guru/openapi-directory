from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteGroupsIDMembersJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupsIDMembersJSONRequest:
    path_params: DeleteGroupsIDMembersJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteGroupsIDMembersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_groups_id_members_json_200_application_json_any: Optional[Any] = field(default=None)
    
