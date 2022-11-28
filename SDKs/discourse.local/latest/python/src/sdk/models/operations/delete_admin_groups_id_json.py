from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAdminGroupsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminGroupsIDJSONRequest:
    path_params: DeleteAdminGroupsIDJSONPathParams = field()
    

@dataclass
class DeleteAdminGroupsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_admin_groups_id_json_200_application_json_any: Optional[Any] = field(default=None)
    
