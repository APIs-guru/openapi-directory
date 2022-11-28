from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignDateRangeKpiResponse:
    r"""CampaignDateRangeKpiResponse
    Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    campaign_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kpi_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KpiName') }})
    kpi_result: BaseKpiResult = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KpiResult') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
