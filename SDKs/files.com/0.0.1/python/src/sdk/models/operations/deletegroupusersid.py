from dataclasses import dataclass, field



@dataclass
class DeleteGroupUsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupUsersIDQueryParams:
    group_id: int = field(metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    user_id: int = field(metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteGroupUsersIDRequest:
    path_params: DeleteGroupUsersIDPathParams = field()
    query_params: DeleteGroupUsersIDQueryParams = field()
    

@dataclass
class DeleteGroupUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
