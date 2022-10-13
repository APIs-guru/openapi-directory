from dataclasses import dataclass, field



@dataclass
class DeleteGroupUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupUsersIDQueryParams:
    group_id: int = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    user_id: int = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteGroupUsersIDRequest:
    path_params: DeleteGroupUsersIDPathParams = field(default=None)
    query_params: DeleteGroupUsersIDQueryParams = field(default=None)
    

@dataclass
class DeleteGroupUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
