from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import repository


@dataclass_json
@dataclass
class StarredRepository:
    repo: repository.Repository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    starred_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
