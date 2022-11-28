from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMySQLDatabasesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMySQLDatabasesRequest:
    query_params: GetMySQLDatabasesQueryParams = field()
    

@dataclass
class GetMySQLDatabasesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    my_sql_databases: Optional[List[shared.MySQLDatabase]] = field(default=None)
    
