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
class GetConsumersResponseData:
    aggregated_request_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregated_request_count') }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    metadata: Optional[ConsumerMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    request_count_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_count_updated') }})
    request_counts: Optional[RequestCountAllocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_counts') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    

@dataclass_json
@dataclass
class GetConsumersResponse:
    data: List[GetConsumersResponseData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
