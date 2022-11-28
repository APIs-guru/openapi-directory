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
class ConsumerRequestCountsInDateRangeResponseData:
    aggregated_request_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregated_request_count') }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    end_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_datetime') }})
    request_counts: Optional[RequestCountAllocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_counts') }})
    start_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_datetime') }})
    

@dataclass_json
@dataclass
class ConsumerRequestCountsInDateRangeResponse:
    data: ConsumerRequestCountsInDateRangeResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
