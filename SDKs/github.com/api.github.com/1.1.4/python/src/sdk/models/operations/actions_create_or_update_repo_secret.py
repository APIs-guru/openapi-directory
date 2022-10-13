from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsCreateOrUpdateRepoSecretPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateOrUpdateRepoSecretRequestBody:
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted_value' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_id' }})
    

@dataclass
class ActionsCreateOrUpdateRepoSecretRequest:
    path_params: ActionsCreateOrUpdateRepoSecretPathParams = field(default=None)
    request: Optional[ActionsCreateOrUpdateRepoSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateRepoSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
