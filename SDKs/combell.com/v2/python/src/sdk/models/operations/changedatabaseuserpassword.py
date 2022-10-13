from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeDatabaseUserPasswordPathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    user_name: str = field(default=None, metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeDatabaseUserPasswordQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeDatabaseUserPasswordRequest:
    path_params: ChangeDatabaseUserPasswordPathParams = field(default=None)
    query_params: ChangeDatabaseUserPasswordQueryParams = field(default=None)
    request: Optional[shared.UpdateUserPasswordRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeDatabaseUserPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
