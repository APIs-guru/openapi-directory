from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphachangehistorychange

class GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum(str, Enum):
    ACTOR_TYPE_UNSPECIFIED = "ACTOR_TYPE_UNSPECIFIED"
    USER = "USER"
    SYSTEM = "SYSTEM"
    SUPPORT = "SUPPORT"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaChangeHistoryEvent:
    actor_type: Optional[GoogleAnalyticsAdminV1alphaChangeHistoryEventActorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actorType' }})
    change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeTime' }})
    changes: Optional[List[googleanalyticsadminv1alphachangehistorychange.GoogleAnalyticsAdminV1alphaChangeHistoryChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    changes_filtered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changesFiltered' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    user_actor_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userActorEmail' }})
    
