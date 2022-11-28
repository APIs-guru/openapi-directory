from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElbLoadBalancerDetails:
    r"""AwsElbLoadBalancerDetails
    Contains details about a Classic Load Balancer.
    """
    
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    backend_server_descriptions: Optional[List[AwsElbLoadBalancerBackendServerDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackendServerDescriptions') }})
    canonical_hosted_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanonicalHostedZoneName') }})
    canonical_hosted_zone_name_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanonicalHostedZoneNameID') }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    health_check: Optional[AwsElbLoadBalancerHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    instances: Optional[List[AwsElbLoadBalancerInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    listener_descriptions: Optional[List[AwsElbLoadBalancerListenerDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerDescriptions') }})
    load_balancer_attributes: Optional[AwsElbLoadBalancerAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerAttributes') }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerName') }})
    policies: Optional[AwsElbLoadBalancerPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scheme') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    source_security_group: Optional[AwsElbLoadBalancerSourceSecurityGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceSecurityGroup') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
