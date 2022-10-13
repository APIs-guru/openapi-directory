from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import apppkgnotification_links
from . import apppkg_notificationtype_enum
from . import timestamp

class AppPkgNotificationOperationalStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class AppPkgNotification:
    links: apppkgnotification_links.AppPkgNotificationLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_d_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDId' }})
    app_pkg_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPkgId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    notification_type: apppkg_notificationtype_enum.AppPkgNotificationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    operational_state: AppPkgNotificationOperationalStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationalState' }})
    subscription_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    time_stamp: timestamp.TimeStamp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp' }})
    
