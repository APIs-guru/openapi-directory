from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CrossProfilePoliciesCrossProfileCopyPasteEnum(str, Enum):
    CROSS_PROFILE_COPY_PASTE_UNSPECIFIED = "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED"
    COPY_FROM_WORK_TO_PERSONAL_DISALLOWED = "COPY_FROM_WORK_TO_PERSONAL_DISALLOWED"
    CROSS_PROFILE_COPY_PASTE_ALLOWED = "CROSS_PROFILE_COPY_PASTE_ALLOWED"

class CrossProfilePoliciesCrossProfileDataSharingEnum(str, Enum):
    CROSS_PROFILE_DATA_SHARING_UNSPECIFIED = "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED"
    CROSS_PROFILE_DATA_SHARING_DISALLOWED = "CROSS_PROFILE_DATA_SHARING_DISALLOWED"
    DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED = "DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED"
    CROSS_PROFILE_DATA_SHARING_ALLOWED = "CROSS_PROFILE_DATA_SHARING_ALLOWED"

class CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum(str, Enum):
    SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED"
    SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED"
    SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED"


@dataclass_json
@dataclass
class CrossProfilePolicies:
    cross_profile_copy_paste: Optional[CrossProfilePoliciesCrossProfileCopyPasteEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossProfileCopyPaste' }})
    cross_profile_data_sharing: Optional[CrossProfilePoliciesCrossProfileDataSharingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossProfileDataSharing' }})
    show_work_contacts_in_personal_profile: Optional[CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showWorkContactsInPersonalProfile' }})
    
