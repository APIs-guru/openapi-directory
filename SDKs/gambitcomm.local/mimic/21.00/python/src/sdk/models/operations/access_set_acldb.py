from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessSetAcldbPathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessSetAcldbRequest:
    path_params: AccessSetAcldbPathParams = field(default=None)
    

@dataclass
class AccessSetAcldbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_set_acldb_200_application_json_string: Optional[str] = field(default=None)
    
