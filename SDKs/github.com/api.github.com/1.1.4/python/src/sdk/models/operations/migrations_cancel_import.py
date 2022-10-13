from dataclasses import dataclass, field



@dataclass
class MigrationsCancelImportPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsCancelImportRequest:
    path_params: MigrationsCancelImportPathParams = field(default=None)
    

@dataclass
class MigrationsCancelImportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
