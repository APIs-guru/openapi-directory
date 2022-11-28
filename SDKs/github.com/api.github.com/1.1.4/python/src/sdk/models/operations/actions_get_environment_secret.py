from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetEnvironmentSecretPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetEnvironmentSecretRequest:
    path_params: ActionsGetEnvironmentSecretPathParams = field()
    

@dataclass
class ActionsGetEnvironmentSecretResponse:
    content_type: str = field()
    status_code: int = field()
    actions_secret: Optional[shared.ActionsSecret] = field(default=None)
    
