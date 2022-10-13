from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReputationOptions:
    last_fresh_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFreshStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reputation_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReputationMetricsEnabled' }})
    
