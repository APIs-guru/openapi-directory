from dataclasses import dataclass, field



@dataclass
class DeleteAdminBadgesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminBadgesIDJSONRequest:
    path_params: DeleteAdminBadgesIDJSONPathParams = field()
    

@dataclass
class DeleteAdminBadgesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
