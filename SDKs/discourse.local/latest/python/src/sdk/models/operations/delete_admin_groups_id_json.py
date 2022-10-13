from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAdminGroupsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminGroupsIDJSONRequest:
    path_params: DeleteAdminGroupsIDJSONPathParams = field(default=None)
    

@dataclass
class DeleteAdminGroupsIDJSONResponse:
    content_type: str = field(default=None)
    delete_admin_groups_id_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
