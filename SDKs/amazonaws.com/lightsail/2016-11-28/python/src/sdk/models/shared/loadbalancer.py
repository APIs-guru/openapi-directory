from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancehealthsummary
from . import ipaddresstype_enum
from . import resourcelocation
from . import loadbalancerprotocol_enum
from . import resourcetype_enum
from . import loadbalancerstate_enum
from . import tag
from . import loadbalancertlscertificatesummary


@dataclass_json
@dataclass
class LoadBalancer:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationOptions' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsName' }})
    health_check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckPath' }})
    instance_health_summary: Optional[List[instancehealthsummary.InstanceHealthSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceHealthSummary' }})
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instancePort' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protocol: Optional[loadbalancerprotocol_enum.LoadBalancerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    public_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicPorts' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    state: Optional[loadbalancerstate_enum.LoadBalancerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tls_certificate_summaries: Optional[List[loadbalancertlscertificatesummary.LoadBalancerTLSCertificateSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsCertificateSummaries' }})
    
