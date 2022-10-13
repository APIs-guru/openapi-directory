from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserPausedDetails:
    job_expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExpiresAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_imminent_expiration_health_event_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobImminentExpirationHealthEventArn' }})
    job_paused_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobPausedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
