from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesCreateLabelPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesCreateLabelRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class IssuesCreateLabelRequest:
    path_params: IssuesCreateLabelPathParams = field()
    request: Optional[IssuesCreateLabelRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesCreateLabelResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    label: Optional[shared.Label] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
