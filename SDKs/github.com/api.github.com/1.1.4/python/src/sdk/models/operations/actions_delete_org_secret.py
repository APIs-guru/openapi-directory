from dataclasses import dataclass, field



@dataclass
class ActionsDeleteOrgSecretPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteOrgSecretRequest:
    path_params: ActionsDeleteOrgSecretPathParams = field()
    

@dataclass
class ActionsDeleteOrgSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
