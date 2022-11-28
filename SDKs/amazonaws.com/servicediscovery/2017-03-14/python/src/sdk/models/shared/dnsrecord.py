from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSRecord:
    r"""DNSRecord
    A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
    """
    
    ttl: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TTL') }})
    type: RecordTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
