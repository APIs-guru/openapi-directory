from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeDatabaseUserStatusPathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    user_name: str = field(default=None, metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeDatabaseUserStatusQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeDatabaseUserStatusRequest:
    path_params: ChangeDatabaseUserStatusPathParams = field(default=None)
    query_params: ChangeDatabaseUserStatusQueryParams = field(default=None)
    request: Optional[shared.UpdateUserStatusRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeDatabaseUserStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
