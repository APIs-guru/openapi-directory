from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repository

class AuthenticationTokenRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class AuthenticationToken:
    expires_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories: Optional[List[repository.Repository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_selection: Optional[AuthenticationTokenRepositorySelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
