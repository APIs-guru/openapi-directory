from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nameserver
from . import registrant


@dataclass_json
@dataclass
class DomainDetail:
    can_toggle_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_toggle_renew' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_name' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name_servers: Optional[List[nameserver.NameServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name_servers' }})
    registrant: Optional[registrant.Registrant] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrant' }})
    will_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'will_renew' }})
    
