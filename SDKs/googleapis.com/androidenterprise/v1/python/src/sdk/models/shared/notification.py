from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Notification
    A notification of one event relating to an enterprise.
    """
    
    app_restrictions_schema_change_event: Optional[AppRestrictionsSchemaChangeEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRestrictionsSchemaChangeEvent') }})
    app_update_event: Optional[AppUpdateEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUpdateEvent') }})
    device_report_update_event: Optional[DeviceReportUpdateEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceReportUpdateEvent') }})
    enterprise_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseId') }})
    install_failure_event: Optional[InstallFailureEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installFailureEvent') }})
    new_device_event: Optional[NewDeviceEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDeviceEvent') }})
    new_permissions_event: Optional[NewPermissionsEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPermissionsEvent') }})
    notification_type: Optional[NotificationNotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    product_approval_event: Optional[ProductApprovalEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productApprovalEvent') }})
    product_availability_change_event: Optional[ProductAvailabilityChangeEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAvailabilityChangeEvent') }})
    timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampMillis') }})
    
