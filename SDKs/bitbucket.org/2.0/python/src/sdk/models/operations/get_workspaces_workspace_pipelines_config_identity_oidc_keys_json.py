from dataclasses import dataclass, field



@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams = field(default=None)
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
