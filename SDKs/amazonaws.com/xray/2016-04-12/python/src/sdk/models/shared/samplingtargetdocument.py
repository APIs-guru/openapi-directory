from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamplingTargetDocument:
    r"""SamplingTargetDocument
    Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href=\"https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html\">GetSamplingTargets</a>.
    """
    
    fixed_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedRate') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    reservoir_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReservoirQuota') }})
    reservoir_quota_ttl: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReservoirQuotaTTL'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleName') }})
    
