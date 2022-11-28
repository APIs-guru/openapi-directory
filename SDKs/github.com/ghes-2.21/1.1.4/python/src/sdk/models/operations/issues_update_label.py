from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IssuesUpdateLabelPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesUpdateLabelRequestBody:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    new_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_name') }})
    

@dataclass
class IssuesUpdateLabelRequest:
    path_params: IssuesUpdateLabelPathParams = field()
    request: Optional[IssuesUpdateLabelRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesUpdateLabelResponse:
    content_type: str = field()
    status_code: int = field()
    label: Optional[shared.Label] = field(default=None)
    
