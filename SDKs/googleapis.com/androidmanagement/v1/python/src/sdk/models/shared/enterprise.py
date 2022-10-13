from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactinfo
from . import externaldata
from . import signindetail
from . import termsandconditions

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
    app_auto_approval_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appAutoApprovalEnabled' }})
    contact_info: Optional[contactinfo.ContactInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactInfo' }})
    enabled_notification_types: Optional[List[EnterpriseEnabledNotificationTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledNotificationTypes' }})
    enterprise_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseDisplayName' }})
    logo: Optional[externaldata.ExternalData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_color: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryColor' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    signin_details: Optional[List[signindetail.SigninDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signinDetails' }})
    terms_and_conditions: Optional[List[termsandconditions.TermsAndConditions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    
