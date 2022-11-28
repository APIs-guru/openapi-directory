from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MailZone:
    aliases: Optional[List[Alias]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    anti_spam: Optional[AntiSpam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anti_spam') }})
    available_accounts: Optional[List[MailZoneAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_accounts') }})
    catch_all: Optional[CatchAll] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catch_all') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smtp_domains: Optional[List[SMTPDomain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smtp_domains') }})
    
