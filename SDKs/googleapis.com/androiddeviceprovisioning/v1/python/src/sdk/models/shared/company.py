from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompanyTermsStatusEnum(str, Enum):
    TERMS_STATUS_UNSPECIFIED = "TERMS_STATUS_UNSPECIFIED"
    TERMS_STATUS_NOT_ACCEPTED = "TERMS_STATUS_NOT_ACCEPTED"
    TERMS_STATUS_ACCEPTED = "TERMS_STATUS_ACCEPTED"
    TERMS_STATUS_STALE = "TERMS_STATUS_STALE"


@dataclass_json
@dataclass
class Company:
    r"""Company
    A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
    """
    
    admin_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmails') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    google_workspace_account: Optional[GoogleWorkspaceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceAccount') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmails') }})
    skip_welcome_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipWelcomeEmail') }})
    terms_status: Optional[CompanyTermsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsStatus') }})
    

@dataclass_json
@dataclass
class CompanyInput:
    r"""CompanyInput
    A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
    """
    
    admin_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmails') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    google_workspace_account: Optional[GoogleWorkspaceAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceAccount') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    owner_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmails') }})
    skip_welcome_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipWelcomeEmail') }})
    
