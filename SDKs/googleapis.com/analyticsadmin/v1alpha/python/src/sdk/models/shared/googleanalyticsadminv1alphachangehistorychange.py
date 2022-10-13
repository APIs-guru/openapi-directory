from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphachangehistorychangechangehistoryresource
from . import googleanalyticsadminv1alphachangehistorychangechangehistoryresource

class GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    CREATED = "CREATED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryChange:
    action: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_after_change: Optional[googleanalyticsadminv1alphachangehistorychangechangehistoryresource.GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAfterChange' }})
    resource_before_change: Optional[googleanalyticsadminv1alphachangehistorychangechangehistoryresource.GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceBeforeChange' }})
    
