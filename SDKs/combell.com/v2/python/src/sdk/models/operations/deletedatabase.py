from dataclasses import dataclass, field



@dataclass
class DeleteDatabasePathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatabaseQueryParams:
    database_name: str = field(metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDatabaseRequest:
    path_params: DeleteDatabasePathParams = field()
    query_params: DeleteDatabaseQueryParams = field()
    

@dataclass
class DeleteDatabaseResponse:
    content_type: str = field()
    status_code: int = field()
    
