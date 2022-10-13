from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactlanguage_enum
from . import mailtype_enum
from . import reviewdetails


@dataclass_json
@dataclass
class AccountDetails:
    additional_contact_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalContactEmailAddresses' }})
    contact_language: Optional[contactlanguage_enum.ContactLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactLanguage' }})
    mail_type: Optional[mailtype_enum.MailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailType' }})
    review_details: Optional[reviewdetails.ReviewDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewDetails' }})
    use_case_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseCaseDescription' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebsiteURL' }})
    
