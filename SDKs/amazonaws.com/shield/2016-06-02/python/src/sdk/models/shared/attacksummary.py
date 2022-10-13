from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attackvectordescription


@dataclass_json
@dataclass
class AttackSummary:
    attack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackId' }})
    attack_vectors: Optional[List[attackvectordescription.AttackVectorDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackVectors' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
