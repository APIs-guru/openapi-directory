from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSProperties:
    r"""DNSProperties
    A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
    """
    
    hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostedZoneId') }})
    soa: Optional[Soa] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SOA') }})
    
