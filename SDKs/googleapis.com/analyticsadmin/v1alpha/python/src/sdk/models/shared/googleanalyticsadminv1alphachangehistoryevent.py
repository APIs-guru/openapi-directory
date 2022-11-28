from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum(str, Enum):
    ACTOR_TYPE_UNSPECIFIED = "ACTOR_TYPE_UNSPECIFIED"
    USER = "USER"
    SYSTEM = "SYSTEM"
    SUPPORT = "SUPPORT"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryEvent:
    r"""GoogleAnalyticsAdminV1alphaChangeHistoryEvent
    A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
    """
    
    actor_type: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorType') }})
    change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeTime') }})
    changes: Optional[List[GoogleAnalyticsAdminV1alphaChangeHistoryChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    changes_filtered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changesFiltered') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    user_actor_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActorEmail') }})
    
