from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterDomainRequest:
    r"""RegisterDomainRequest
    The RegisterDomain request includes the following elements.
    """
    
    admin_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminContact') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    duration_in_years: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInYears') }})
    registrant_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantContact') }})
    tech_contact: ContactDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechContact') }})
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    idn_lang_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdnLangCode') }})
    privacy_protect_admin_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectAdminContact') }})
    privacy_protect_registrant_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectRegistrantContact') }})
    privacy_protect_tech_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivacyProtectTechContact') }})
    
