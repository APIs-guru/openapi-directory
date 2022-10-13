from dataclasses import dataclass, field



@dataclass
class GetAdminBackupsFilenamePathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminBackupsFilenameQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdminBackupsFilenameRequest:
    path_params: GetAdminBackupsFilenamePathParams = field(default=None)
    query_params: GetAdminBackupsFilenameQueryParams = field(default=None)
    

@dataclass
class GetAdminBackupsFilenameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
