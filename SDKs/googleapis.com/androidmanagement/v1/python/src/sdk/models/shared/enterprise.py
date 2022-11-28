from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseEnabledNotificationTypesEnum(str, Enum):
    NOTIFICATION_TYPE_UNSPECIFIED = "NOTIFICATION_TYPE_UNSPECIFIED"
    ENROLLMENT = "ENROLLMENT"
    COMPLIANCE_REPORT = "COMPLIANCE_REPORT"
    STATUS_REPORT = "STATUS_REPORT"
    COMMAND = "COMMAND"
    USAGE_LOGS = "USAGE_LOGS"


@dataclass_json
@dataclass
class Enterprise:
    r"""Enterprise
    The configuration applied to an enterprise.
    """
    
    app_auto_approval_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appAutoApprovalEnabled') }})
    contact_info: Optional[ContactInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfo') }})
    enabled_notification_types: Optional[List[EnterpriseEnabledNotificationTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledNotificationTypes') }})
    enterprise_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseDisplayName') }})
    logo: Optional[ExternalData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_color: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryColor') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    signin_details: Optional[List[SigninDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signinDetails') }})
    terms_and_conditions: Optional[List[TermsAndConditions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    
