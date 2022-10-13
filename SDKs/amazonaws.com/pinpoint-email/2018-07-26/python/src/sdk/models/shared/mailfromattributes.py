from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import behavioronmxfailure_enum
from . import mailfromdomainstatus_enum


@dataclass_json
@dataclass
class MailFromAttributes:
    behavior_on_mx_failure: behavioronmxfailure_enum.BehaviorOnMxFailureEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BehaviorOnMxFailure' }})
    mail_from_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailFromDomain' }})
    mail_from_domain_status: mailfromdomainstatus_enum.MailFromDomainStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MailFromDomainStatus' }})
    
