from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttackDetail:
    r"""AttackDetail
    The details of a DDoS attack.
    """
    
    attack_counters: Optional[List[SummarizedCounter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackCounters') }})
    attack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackId') }})
    attack_properties: Optional[List[AttackProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackProperties') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mitigations: Optional[List[Mitigation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mitigations') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_resources: Optional[List[SubResourceSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubResources') }})
    
