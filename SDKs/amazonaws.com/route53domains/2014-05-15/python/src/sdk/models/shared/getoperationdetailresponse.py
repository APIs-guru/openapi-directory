from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operationstatus_enum
from . import operationtype_enum


@dataclass_json
@dataclass
class GetOperationDetailResponse:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationId' }})
    status: Optional[operationstatus_enum.OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    submitted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[operationtype_enum.OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
