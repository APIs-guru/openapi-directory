from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import icmptypecode
from . import portrangefromto


@dataclass_json
@dataclass
class AwsEc2NetworkACLEntry:
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrBlock' }})
    egress: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Egress' }})
    icmp_type_code: Optional[icmptypecode.IcmpTypeCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IcmpTypeCode' }})
    ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ipv6CidrBlock' }})
    port_range: Optional[portrangefromto.PortRangeFromTo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortRange' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    rule_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleAction' }})
    rule_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleNumber' }})
    
