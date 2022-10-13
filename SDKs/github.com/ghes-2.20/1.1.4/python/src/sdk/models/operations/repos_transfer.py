from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposTransferPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposTransferRequestBody:
    new_owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_owner' }})
    team_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_ids' }})
    

@dataclass
class ReposTransferRequest:
    path_params: ReposTransferPathParams = field(default=None)
    request: Optional[ReposTransferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    minimal_repository: Optional[shared.MinimalRepository] = field(default=None)
    
