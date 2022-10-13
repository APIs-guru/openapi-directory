from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import algorithmstatus_enum


@dataclass_json
@dataclass
class AlgorithmSummary:
    algorithm_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    algorithm_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmDescription' }})
    algorithm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmName' }})
    algorithm_status: algorithmstatus_enum.AlgorithmStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmStatus' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
