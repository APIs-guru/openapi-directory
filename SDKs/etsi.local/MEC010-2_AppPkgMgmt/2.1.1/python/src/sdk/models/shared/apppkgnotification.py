from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppPkgNotificationOperationalStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class AppPkgNotification:
    r"""AppPkgNotification
    'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
    """
    
    links: AppPkgNotificationLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_d_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDId') }})
    app_pkg_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notification_type: AppPkgNotificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    operational_state: AppPkgNotificationOperationalStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationalState') }})
    subscription_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    time_stamp: TimeStamp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamp') }})
    
