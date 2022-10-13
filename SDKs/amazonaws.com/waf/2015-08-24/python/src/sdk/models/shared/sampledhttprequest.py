from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import httprequest


@dataclass_json
@dataclass
class SampledHTTPRequest:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    request: httprequest.HTTPRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Request' }})
    rule_within_rule_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleWithinRuleGroup' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Weight' }})
    
