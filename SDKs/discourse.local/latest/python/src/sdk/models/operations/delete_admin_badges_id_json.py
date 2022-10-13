from dataclasses import dataclass, field



@dataclass
class DeleteAdminBadgesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminBadgesIDJSONRequest:
    path_params: DeleteAdminBadgesIDJSONPathParams = field(default=None)
    

@dataclass
class DeleteAdminBadgesIDJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
