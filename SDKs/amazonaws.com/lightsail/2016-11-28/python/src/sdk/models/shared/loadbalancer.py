from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoadBalancer:
    r"""LoadBalancer
    Describes a load balancer.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    configuration_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationOptions') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsName') }})
    health_check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckPath') }})
    instance_health_summary: Optional[List[InstanceHealthSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceHealthSummary') }})
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instancePort') }})
    ip_address_type: Optional[IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: Optional[LoadBalancerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPorts') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    state: Optional[LoadBalancerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tls_certificate_summaries: Optional[List[LoadBalancerTLSCertificateSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsCertificateSummaries') }})
    
