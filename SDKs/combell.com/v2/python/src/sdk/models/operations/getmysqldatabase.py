from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMySQLDatabasePathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMySQLDatabaseQueryParams:
    database_name: str = field(metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMySQLDatabaseRequest:
    path_params: GetMySQLDatabasePathParams = field()
    query_params: GetMySQLDatabaseQueryParams = field()
    

@dataclass
class GetMySQLDatabaseResponse:
    content_type: str = field()
    status_code: int = field()
    my_sql_database: Optional[shared.MySQLDatabase] = field(default=None)
    
