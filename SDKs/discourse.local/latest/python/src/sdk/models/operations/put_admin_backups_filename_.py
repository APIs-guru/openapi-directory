from dataclasses import dataclass, field



@dataclass
class PutAdminBackupsFilenamePathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminBackupsFilenameRequest:
    path_params: PutAdminBackupsFilenamePathParams = field(default=None)
    

@dataclass
class PutAdminBackupsFilenameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
