from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class Webhook:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: List[shared.WebhookEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    execute_base_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execute_base_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: shared.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unified_api: shared.UnifiedAPIIDEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_api' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
