from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecretScanningAlert:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    resolved_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolved_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resolved_by: Optional[SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolved_by') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret_type') }})
    state: Optional[SecretScanningAlertStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
