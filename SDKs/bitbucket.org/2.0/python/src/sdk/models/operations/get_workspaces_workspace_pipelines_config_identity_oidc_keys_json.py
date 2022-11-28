from dataclasses import dataclass, field



@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams = field()
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
