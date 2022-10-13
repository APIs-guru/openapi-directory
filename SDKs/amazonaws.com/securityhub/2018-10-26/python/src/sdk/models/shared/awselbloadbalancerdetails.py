from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awselbloadbalancerbackendserverdescription
from . import awselbloadbalancerhealthcheck
from . import awselbloadbalancerinstance
from . import awselbloadbalancerlistenerdescription
from . import awselbloadbalancerattributes
from . import awselbloadbalancerpolicies
from . import awselbloadbalancersourcesecuritygroup


@dataclass_json
@dataclass
class AwsElbLoadBalancerDetails:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    backend_server_descriptions: Optional[List[awselbloadbalancerbackendserverdescription.AwsElbLoadBalancerBackendServerDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendServerDescriptions' }})
    canonical_hosted_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanonicalHostedZoneName' }})
    canonical_hosted_zone_name_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanonicalHostedZoneNameID' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    health_check: Optional[awselbloadbalancerhealthcheck.AwsElbLoadBalancerHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheck' }})
    instances: Optional[List[awselbloadbalancerinstance.AwsElbLoadBalancerInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Instances' }})
    listener_descriptions: Optional[List[awselbloadbalancerlistenerdescription.AwsElbLoadBalancerListenerDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListenerDescriptions' }})
    load_balancer_attributes: Optional[awselbloadbalancerattributes.AwsElbLoadBalancerAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancerAttributes' }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancerName' }})
    policies: Optional[awselbloadbalancerpolicies.AwsElbLoadBalancerPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scheme' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    source_security_group: Optional[awselbloadbalancersourcesecuritygroup.AwsElbLoadBalancerSourceSecurityGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceSecurityGroup' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subnets' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
