from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainValidationRecord:
    r"""DomainValidationRecord
    Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    resource_record: Optional[ResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRecord') }})
    
