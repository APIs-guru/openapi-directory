from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apprestrictionsschemachangeevent
from . import appupdateevent
from . import devicereportupdateevent
from . import installfailureevent
from . import newdeviceevent
from . import newpermissionsevent
from . import productapprovalevent
from . import productavailabilitychangeevent

class NotificationNotificationTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    TEST_NOTIFICATION = "testNotification"
    PRODUCT_APPROVAL = "productApproval"
    INSTALL_FAILURE = "installFailure"
    APP_UPDATE = "appUpdate"
    NEW_PERMISSIONS = "newPermissions"
    APP_RESTRICIONS_SCHEMA_CHANGE = "appRestricionsSchemaChange"
    PRODUCT_AVAILABILITY_CHANGE = "productAvailabilityChange"
    NEW_DEVICE = "newDevice"
    DEVICE_REPORT_UPDATE = "deviceReportUpdate"


@dataclass_json
@dataclass
class Notification:
    app_restrictions_schema_change_event: Optional[apprestrictionsschemachangeevent.AppRestrictionsSchemaChangeEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appRestrictionsSchemaChangeEvent' }})
    app_update_event: Optional[appupdateevent.AppUpdateEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appUpdateEvent' }})
    device_report_update_event: Optional[devicereportupdateevent.DeviceReportUpdateEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceReportUpdateEvent' }})
    enterprise_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseId' }})
    install_failure_event: Optional[installfailureevent.InstallFailureEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installFailureEvent' }})
    new_device_event: Optional[newdeviceevent.NewDeviceEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newDeviceEvent' }})
    new_permissions_event: Optional[newpermissionsevent.NewPermissionsEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPermissionsEvent' }})
    notification_type: Optional[NotificationNotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    product_approval_event: Optional[productapprovalevent.ProductApprovalEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productApprovalEvent' }})
    product_availability_change_event: Optional[productavailabilitychangeevent.ProductAvailabilityChangeEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productAvailabilityChangeEvent' }})
    timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMillis' }})
    
