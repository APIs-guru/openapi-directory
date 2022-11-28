from dataclasses import dataclass, field



@dataclass
class DeleteDatabaseUserPathParams:
    database_name: str = field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    user_name: str = field(metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatabaseUserQueryParams:
    database_name: str = field(metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDatabaseUserRequest:
    path_params: DeleteDatabaseUserPathParams = field()
    query_params: DeleteDatabaseUserQueryParams = field()
    

@dataclass
class DeleteDatabaseUserResponse:
    content_type: str = field()
    status_code: int = field()
    
