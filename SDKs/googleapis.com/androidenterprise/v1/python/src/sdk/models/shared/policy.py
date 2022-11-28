from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyAutoUpdatePolicyEnum(str, Enum):
    AUTO_UPDATE_POLICY_UNSPECIFIED = "autoUpdatePolicyUnspecified"
    CHOICE_TO_THE_USER = "choiceToTheUser"
    NEVER = "never"
    WIFI_ONLY = "wifiOnly"
    ALWAYS = "always"

class PolicyDeviceReportPolicyEnum(str, Enum):
    DEVICE_REPORT_POLICY_UNSPECIFIED = "deviceReportPolicyUnspecified"
    DEVICE_REPORT_DISABLED = "deviceReportDisabled"
    DEVICE_REPORT_ENABLED = "deviceReportEnabled"

class PolicyProductAvailabilityPolicyEnum(str, Enum):
    PRODUCT_AVAILABILITY_POLICY_UNSPECIFIED = "productAvailabilityPolicyUnspecified"
    WHITELIST = "whitelist"
    ALL = "all"


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    The device policy for a given managed device.
    """
    
    auto_update_policy: Optional[PolicyAutoUpdatePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdatePolicy') }})
    device_report_policy: Optional[PolicyDeviceReportPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceReportPolicy') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    product_availability_policy: Optional[PolicyProductAvailabilityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAvailabilityPolicy') }})
    product_policy: Optional[List[ProductPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productPolicy') }})
    
