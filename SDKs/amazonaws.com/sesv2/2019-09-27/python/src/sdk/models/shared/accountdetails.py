from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountDetails:
    r"""AccountDetails
    An object that contains information about your account details.
    """
    
    additional_contact_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalContactEmailAddresses') }})
    contact_language: Optional[ContactLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactLanguage') }})
    mail_type: Optional[MailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailType') }})
    review_details: Optional[ReviewDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewDetails') }})
    use_case_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseCaseDescription') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteURL') }})
    
