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
class Consumer:
    aggregated_request_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregated_request_count') }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    connections: Optional[List[ConsumerConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    metadata: Optional[ConsumerMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    request_count_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_count_updated') }})
    request_counts: Optional[RequestCountAllocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_counts') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
