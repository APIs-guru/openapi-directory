from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetEnvironmentSecretPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetEnvironmentSecretRequest:
    path_params: ActionsGetEnvironmentSecretPathParams = field(default=None)
    

@dataclass
class ActionsGetEnvironmentSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_secret: Optional[shared.ActionsSecret] = field(default=None)
    
