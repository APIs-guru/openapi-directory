from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    CREATED = "CREATED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryChange:
    r"""GoogleAnalyticsAdminV1alphaChangeHistoryChange
    A description of a change to a single Google Analytics resource.
    """
    
    action: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryChangeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_after_change: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAfterChange') }})
    resource_before_change: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceBeforeChange') }})
    
