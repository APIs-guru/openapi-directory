from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsCreateOrUpdateEnvironmentSecretPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequestBody:
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted_value' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_id' }})
    

@dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequest:
    path_params: ActionsCreateOrUpdateEnvironmentSecretPathParams = field(default=None)
    request: Optional[ActionsCreateOrUpdateEnvironmentSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateEnvironmentSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
