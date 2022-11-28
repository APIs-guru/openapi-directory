from dataclasses import dataclass, field



@dataclass
class MigrationsCancelImportPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsCancelImportRequest:
    path_params: MigrationsCancelImportPathParams = field()
    

@dataclass
class MigrationsCancelImportResponse:
    content_type: str = field()
    status_code: int = field()
    
