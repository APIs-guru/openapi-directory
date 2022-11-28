from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDatabaseUsersPathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabaseUsersQueryParams:
    database_name: str = field(metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDatabaseUsersRequest:
    path_params: GetDatabaseUsersPathParams = field()
    query_params: GetDatabaseUsersQueryParams = field()
    

@dataclass
class GetDatabaseUsersResponse:
    content_type: str = field()
    status_code: int = field()
    my_sql_users: Optional[List[shared.MySQLUser]] = field(default=None)
    
