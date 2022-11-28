from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MailFromAttributes:
    r"""MailFromAttributes
    A list of attributes that are associated with a MAIL FROM domain.
    """
    
    behavior_on_mx_failure: BehaviorOnMxFailureEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BehaviorOnMxFailure') }})
    mail_from_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomain') }})
    mail_from_domain_status: MailFromDomainStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MailFromDomainStatus') }})
    
