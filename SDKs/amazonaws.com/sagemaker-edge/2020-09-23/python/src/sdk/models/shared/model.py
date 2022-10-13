from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgemetric


@dataclass_json
@dataclass
class Model:
    latest_inference: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestInference', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_sample_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestSampleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_metrics: Optional[List[edgemetric.EdgeMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelMetrics' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    
