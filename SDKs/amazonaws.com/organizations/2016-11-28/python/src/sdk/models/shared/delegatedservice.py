from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DelegatedService:
    delegation_enabled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DelegationEnabledDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServicePrincipal' }})
    
