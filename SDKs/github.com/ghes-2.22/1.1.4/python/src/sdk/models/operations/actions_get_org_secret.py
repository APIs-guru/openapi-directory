from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetOrgSecretRequest:
    path_params: ActionsGetOrgSecretPathParams = field(default=None)
    

@dataclass
class ActionsGetOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    organization_actions_secret: Optional[shared.OrganizationActionsSecret] = field(default=None)
    
