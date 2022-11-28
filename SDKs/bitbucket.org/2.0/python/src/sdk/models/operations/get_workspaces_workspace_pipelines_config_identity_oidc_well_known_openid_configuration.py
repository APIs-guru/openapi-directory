from dataclasses import dataclass, field



@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest:
    path_params: GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams = field()
    

@dataclass
class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
