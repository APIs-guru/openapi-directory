from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gatewaycapabilitysummary
from . import gatewayplatform


@dataclass_json
@dataclass
class DescribeGatewayResponse:
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayArn' }})
    gateway_capability_summaries: List[gatewaycapabilitysummary.GatewayCapabilitySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayCapabilitySummaries' }})
    gateway_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayId' }})
    gateway_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayName' }})
    gateway_platform: Optional[gatewayplatform.GatewayPlatform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayPlatform' }})
    last_update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
