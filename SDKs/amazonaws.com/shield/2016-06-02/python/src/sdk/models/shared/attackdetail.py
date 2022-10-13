from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import summarizedcounter
from . import attackproperty
from . import mitigation
from . import subresourcesummary


@dataclass_json
@dataclass
class AttackDetail:
    attack_counters: Optional[List[summarizedcounter.SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackCounters' }})
    attack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackId' }})
    attack_properties: Optional[List[attackproperty.AttackProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttackProperties' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mitigations: Optional[List[mitigation.Mitigation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mitigations' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_resources: Optional[List[subresourcesummary.SubResourceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubResources' }})
    
