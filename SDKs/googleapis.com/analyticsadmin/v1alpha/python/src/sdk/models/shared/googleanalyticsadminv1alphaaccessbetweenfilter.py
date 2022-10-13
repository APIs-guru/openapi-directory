from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphanumericvalue
from . import googleanalyticsadminv1alphanumericvalue


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessBetweenFilter:
    from_value: Optional[googleanalyticsadminv1alphanumericvalue.GoogleAnalyticsAdminV1alphaNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromValue' }})
    to_value: Optional[googleanalyticsadminv1alphanumericvalue.GoogleAnalyticsAdminV1alphaNumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toValue' }})
    
