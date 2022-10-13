from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposRenameBranchPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposRenameBranchRequestBody:
    new_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_name' }})
    

@dataclass
class ReposRenameBranchRequest:
    path_params: ReposRenameBranchPathParams = field(default=None)
    request: Optional[ReposRenameBranchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposRenameBranchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    branch_with_protection: Optional[shared.BranchWithProtection] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
