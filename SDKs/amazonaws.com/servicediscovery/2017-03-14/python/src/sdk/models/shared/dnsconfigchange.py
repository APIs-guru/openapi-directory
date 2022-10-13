from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dnsrecord


@dataclass_json
@dataclass
class DNSConfigChange:
    dns_records: List[dnsrecord.DNSRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsRecords' }})
    
