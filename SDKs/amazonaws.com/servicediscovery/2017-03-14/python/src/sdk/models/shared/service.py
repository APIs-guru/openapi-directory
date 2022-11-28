from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
    A complex type that contains information about the specified service.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    health_check_custom_config: Optional[HealthCheckCustomConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckCustomConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamespaceId') }})
    type: Optional[ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
