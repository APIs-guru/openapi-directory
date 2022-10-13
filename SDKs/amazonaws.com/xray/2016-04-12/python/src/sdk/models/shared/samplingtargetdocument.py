from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamplingTargetDocument:
    fixed_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedRate' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    reservoir_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReservoirQuota' }})
    reservoir_quota_ttl: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReservoirQuotaTTL', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    
