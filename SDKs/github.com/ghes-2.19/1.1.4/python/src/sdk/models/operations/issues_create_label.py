from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesCreateLabelPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesCreateLabelRequestBody:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class IssuesCreateLabelRequest:
    path_params: IssuesCreateLabelPathParams = field(default=None)
    request: Optional[IssuesCreateLabelRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesCreateLabelResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    label: Optional[shared.Label] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
