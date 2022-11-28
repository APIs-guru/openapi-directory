from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessApprovalSettingsInput:
    r"""AccessApprovalSettingsInput
    Settings on a Project/Folder/Organization related to Access Approval.
    """
    
    active_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeKeyVersion') }})
    enrolled_services: Optional[List[EnrolledService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledServices') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEmails') }})
    

@dataclass_json
@dataclass
class AccessApprovalSettings:
    r"""AccessApprovalSettings
    Settings on a Project/Folder/Organization related to Access Approval.
    """
    
    active_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeKeyVersion') }})
    ancestor_has_active_key_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestorHasActiveKeyVersion') }})
    enrolled_ancestor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledAncestor') }})
    enrolled_services: Optional[List[EnrolledService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledServices') }})
    invalid_key_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidKeyVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEmails') }})
    
