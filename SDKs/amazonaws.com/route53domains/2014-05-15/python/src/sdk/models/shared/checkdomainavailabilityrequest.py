from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckDomainAvailabilityRequest:
    r"""CheckDomainAvailabilityRequest
    The CheckDomainAvailability request contains the following elements.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    idn_lang_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdnLangCode') }})
    
