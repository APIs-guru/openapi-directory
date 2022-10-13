from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesUpdateLabelPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesUpdateLabelRequestBody:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    new_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_name' }})
    

@dataclass
class IssuesUpdateLabelRequest:
    path_params: IssuesUpdateLabelPathParams = field(default=None)
    request: Optional[IssuesUpdateLabelRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesUpdateLabelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    label: Optional[shared.Label] = field(default=None)
    
