from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import availabilityzone
from . import loadbalancerstate


@dataclass_json
@dataclass
class AwsElbv2LoadBalancerDetails:
    availability_zones: Optional[List[availabilityzone.AvailabilityZone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    canonical_hosted_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanonicalHostedZoneId' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DNSName' }})
    ip_address_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressType' }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scheme' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    state: Optional[loadbalancerstate.LoadBalancerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
