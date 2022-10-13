from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modelstatus_enum


@dataclass_json
@dataclass
class ModelSummary:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
