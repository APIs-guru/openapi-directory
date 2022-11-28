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
class GetSamplingTargetsResult:
    last_rule_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRuleModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sampling_target_documents: Optional[List[SamplingTargetDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingTargetDocuments') }})
    unprocessed_statistics: Optional[List[UnprocessedStatistics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedStatistics') }})
    
