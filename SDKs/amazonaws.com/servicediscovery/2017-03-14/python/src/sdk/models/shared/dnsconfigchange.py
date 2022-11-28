from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSConfigChange:
    r"""DNSConfigChange
    A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
    """
    
    dns_records: List[DNSRecord] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRecords') }})
    
