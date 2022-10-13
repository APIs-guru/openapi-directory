from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMySQLDatabasePathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMySQLDatabaseQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMySQLDatabaseRequest:
    path_params: GetMySQLDatabasePathParams = field(default=None)
    query_params: GetMySQLDatabaseQueryParams = field(default=None)
    

@dataclass
class GetMySQLDatabaseResponse:
    content_type: str = field(default=None)
    my_sql_database: Optional[shared.MySQLDatabase] = field(default=None)
    status_code: int = field(default=None)
    
