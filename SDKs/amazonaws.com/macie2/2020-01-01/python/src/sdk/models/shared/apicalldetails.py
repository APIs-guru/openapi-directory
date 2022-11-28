from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APICallDetails:
    r"""APICallDetails
    Provides information about an API operation that an entity invoked for an affected resource.
    """
    
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    api_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiServiceName') }})
    first_seen: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstSeen'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
