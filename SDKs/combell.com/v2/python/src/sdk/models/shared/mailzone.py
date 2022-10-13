from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alias
from . import antispam
from . import mailzoneaccount
from . import catchall
from . import smtpdomain


@dataclass_json
@dataclass
class MailZone:
    aliases: Optional[List[alias.Alias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    anti_spam: Optional[antispam.AntiSpam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anti_spam' }})
    available_accounts: Optional[List[mailzoneaccount.MailZoneAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_accounts' }})
    catch_all: Optional[catchall.CatchAll] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catch_all' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    smtp_domains: Optional[List[smtpdomain.SMTPDomain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_domains' }})
    
