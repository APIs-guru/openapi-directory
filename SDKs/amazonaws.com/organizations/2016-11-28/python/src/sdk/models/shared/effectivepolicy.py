from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import effectivepolicytype_enum


@dataclass_json
@dataclass
class EffectivePolicy:
    last_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyContent' }})
    policy_type: Optional[effectivepolicytype_enum.EffectivePolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    
