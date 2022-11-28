from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessSetAcldbPathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessSetAcldbRequest:
    path_params: AccessSetAcldbPathParams = field()
    

@dataclass
class AccessSetAcldbResponse:
    content_type: str = field()
    status_code: int = field()
    access_set_acldb_200_application_json_string: Optional[str] = field(default=None)
    
