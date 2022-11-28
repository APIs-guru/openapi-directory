from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContactInfo:
    r"""ContactInfo
    Contact details for managed Google Play enterprises.
    """
    
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    data_protection_officer_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionOfficerEmail') }})
    data_protection_officer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionOfficerName') }})
    data_protection_officer_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionOfficerPhone') }})
    eu_representative_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('euRepresentativeEmail') }})
    eu_representative_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('euRepresentativeName') }})
    eu_representative_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('euRepresentativePhone') }})
    
