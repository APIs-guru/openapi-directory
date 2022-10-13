from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dnsconfig
from . import healthcheckconfig
from . import healthcheckcustomconfig
from . import servicetype_enum


@dataclass_json
@dataclass
class Service:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    dns_config: Optional[dnsconfig.DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsConfig' }})
    health_check_config: Optional[healthcheckconfig.HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfig' }})
    health_check_custom_config: Optional[healthcheckcustomconfig.HealthCheckCustomConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckCustomConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamespaceId' }})
    type: Optional[servicetype_enum.ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
