from dataclasses import dataclass, field



@dataclass
class GetAdminBackupsFilenamePathParams:
    filename: str = field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminBackupsFilenameQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdminBackupsFilenameRequest:
    path_params: GetAdminBackupsFilenamePathParams = field()
    query_params: GetAdminBackupsFilenameQueryParams = field()
    

@dataclass
class GetAdminBackupsFilenameResponse:
    content_type: str = field()
    status_code: int = field()
    
