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
class ItemResponse:
    r"""ItemResponse
    Provides information about the results of a request to create or update an endpoint that's associated with an event.
    """
    
    endpoint_item_response: Optional[EndpointItemResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointItemResponse') }})
    events_item_response: Optional[dict[str, EventItemResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsItemResponse') }})
    
