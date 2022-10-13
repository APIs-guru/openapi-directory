from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import operationstatus_enum
from . import operationtype_enum


@dataclass_json
@dataclass
class OperationSummary:
    operation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationId' }})
    status: operationstatus_enum.OperationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    submitted_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: operationtype_enum.OperationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
