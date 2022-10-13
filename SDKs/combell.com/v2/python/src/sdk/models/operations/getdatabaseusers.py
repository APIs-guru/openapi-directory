from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDatabaseUsersPathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabaseUsersQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatabaseUsersRequest:
    path_params: GetDatabaseUsersPathParams = field(default=None)
    query_params: GetDatabaseUsersQueryParams = field(default=None)
    

@dataclass
class GetDatabaseUsersResponse:
    content_type: str = field(default=None)
    my_sql_users: Optional[List[shared.MySQLUser]] = field(default=None)
    status_code: int = field(default=None)
    
