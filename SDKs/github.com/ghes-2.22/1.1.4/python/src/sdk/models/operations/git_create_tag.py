from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GitCreateTagPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateTagRequestBodyTagger:
    r"""GitCreateTagRequestBodyTagger
    An object with information about the individual creating the tag.
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class GitCreateTagRequestBodyTypeEnum(str, Enum):
    COMMIT = "commit"
    TREE = "tree"
    BLOB = "blob"


@dataclass_json
@dataclass
class GitCreateTagRequestBody:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    type: GitCreateTagRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    tagger: Optional[GitCreateTagRequestBodyTagger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagger') }})
    

@dataclass
class GitCreateTagRequest:
    path_params: GitCreateTagPathParams = field()
    request: Optional[GitCreateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateTagResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    git_tag: Optional[shared.GitTag] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
