from dataclasses import dataclass, field



@dataclass
class DeleteDatabaseUserPathParams:
    database_name: str = field(default=None, metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    user_name: str = field(default=None, metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatabaseUserQueryParams:
    database_name: str = field(default=None, metadata={'query_param': { 'field_name': 'database_name', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDatabaseUserRequest:
    path_params: DeleteDatabaseUserPathParams = field(default=None)
    query_params: DeleteDatabaseUserQueryParams = field(default=None)
    

@dataclass
class DeleteDatabaseUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
