from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import domainstatus_enum


@dataclass_json
@dataclass
class DomainSummary:
    created_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    domain_status: domainstatus_enum.DomainStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainStatus' }})
    
