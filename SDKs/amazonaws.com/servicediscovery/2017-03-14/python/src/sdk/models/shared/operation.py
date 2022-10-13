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
class Operation:
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    status: Optional[operationstatus_enum.OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    targets: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    type: Optional[operationtype_enum.OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
