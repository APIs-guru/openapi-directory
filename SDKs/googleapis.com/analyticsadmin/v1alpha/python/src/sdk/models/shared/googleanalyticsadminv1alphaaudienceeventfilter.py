from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencefilterexpression


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceEventFilter:
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    event_parameter_filter_expression: Optional[googleanalyticsadminv1alphaaudiencefilterexpression.GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventParameterFilterExpression' }})
    
