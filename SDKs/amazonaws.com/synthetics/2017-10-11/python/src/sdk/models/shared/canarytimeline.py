from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CanaryTimeline:
    r"""CanaryTimeline
    This structure contains information about when the canary was created and modified.
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStarted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStopped'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
