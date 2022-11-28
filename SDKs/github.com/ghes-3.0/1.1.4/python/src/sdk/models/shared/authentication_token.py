from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AuthenticationTokenRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class AuthenticationToken:
    r"""AuthenticationToken
    Authentication Token
    """
    
    expires_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    permissions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories: Optional[List[Repository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repository_selection: Optional[AuthenticationTokenRepositorySelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    
