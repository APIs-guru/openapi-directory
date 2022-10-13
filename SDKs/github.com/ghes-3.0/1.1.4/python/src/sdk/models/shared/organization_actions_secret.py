from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OrganizationActionsSecretVisibilityEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    SELECTED = "selected"


@dataclass_json
@dataclass
class OrganizationActionsSecret:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    selected_repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repositories_url' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    visibility: OrganizationActionsSecretVisibilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
