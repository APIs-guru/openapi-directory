from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CompanyTermsStatusEnum(str, Enum):
    TERMS_STATUS_UNSPECIFIED = "TERMS_STATUS_UNSPECIFIED"
    TERMS_STATUS_NOT_ACCEPTED = "TERMS_STATUS_NOT_ACCEPTED"
    TERMS_STATUS_ACCEPTED = "TERMS_STATUS_ACCEPTED"
    TERMS_STATUS_STALE = "TERMS_STATUS_STALE"


@dataclass_json
@dataclass
class Company:
    admin_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminEmails' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyId' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerEmails' }})
    skip_welcome_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipWelcomeEmail' }})
    terms_status: Optional[CompanyTermsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsStatus' }})
    
