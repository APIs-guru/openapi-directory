from dataclasses import dataclass, field



@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams = field(default=None)
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
