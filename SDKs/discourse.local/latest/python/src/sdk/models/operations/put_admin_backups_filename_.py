from dataclasses import dataclass, field



@dataclass
class PutAdminBackupsFilenamePathParams:
    filename: str = field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminBackupsFilenameRequest:
    path_params: PutAdminBackupsFilenamePathParams = field()
    

@dataclass
class PutAdminBackupsFilenameResponse:
    content_type: str = field()
    status_code: int = field()
    
