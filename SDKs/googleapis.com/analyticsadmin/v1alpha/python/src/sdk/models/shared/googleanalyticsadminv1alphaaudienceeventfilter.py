from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceEventFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceEventFilter
    A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
    """
    
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    event_parameter_filter_expression: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventParameterFilterExpression') }})
    
