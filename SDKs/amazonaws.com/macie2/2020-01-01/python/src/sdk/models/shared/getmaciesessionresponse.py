from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingpublishingfrequency_enum
from . import maciestatus_enum


@dataclass_json
@dataclass
class GetMacieSessionResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    finding_publishing_frequency: Optional[findingpublishingfrequency_enum.FindingPublishingFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingPublishingFrequency' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    status: Optional[maciestatus_enum.MacieStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
