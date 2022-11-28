from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DNSRuleDescriptor:
    dns_rule_id: str = field()
    domain_name: str = field()
    ip_address: str = field()
    ip_address_type: IPAddressTypeEnum = field()
    ttl: Optional[int] = field(default=None)
    
