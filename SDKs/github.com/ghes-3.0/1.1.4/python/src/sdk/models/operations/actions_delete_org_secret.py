from dataclasses import dataclass, field



@dataclass
class ActionsDeleteOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteOrgSecretRequest:
    path_params: ActionsDeleteOrgSecretPathParams = field(default=None)
    

@dataclass
class ActionsDeleteOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
