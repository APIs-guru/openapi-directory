from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateMySQLUserPathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMySQLUserQueryParams:
    database_name: str = field(metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateMySQLUserRequest:
    path_params: CreateMySQLUserPathParams = field()
    query_params: CreateMySQLUserQueryParams = field()
    request: Optional[shared.CreateMySQLUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMySQLUserResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
