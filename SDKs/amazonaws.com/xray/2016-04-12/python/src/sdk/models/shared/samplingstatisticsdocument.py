from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamplingStatisticsDocument:
    r"""SamplingStatisticsDocument
    Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href=\"https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html\">GetSamplingTargets</a>.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    request_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestCount') }})
    rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    sampled_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampledCount') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    borrow_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BorrowCount') }})
    
