from dataclasses import dataclass, field



@dataclass
class DeleteDatabasePathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatabaseQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDatabaseRequest:
    path_params: DeleteDatabasePathParams = field(default=None)
    query_params: DeleteDatabaseQueryParams = field(default=None)
    

@dataclass
class DeleteDatabaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
