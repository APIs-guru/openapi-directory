from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GatewaySummary:
    r"""GatewaySummary
    Contains a summary of a gateway.
    """
    
    creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    gateway_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayName') }})
    last_update_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gateway_capability_summaries: Optional[List[GatewayCapabilitySummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayCapabilitySummaries') }})
    gateway_platform: Optional[GatewayPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayPlatform') }})
    
