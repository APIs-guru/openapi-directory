from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepositorySubscription:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ignored: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_url' }})
    subscribed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribed' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
