from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import realtimeendpointinfo
from . import mlmodeltype_enum
from . import entitystatus_enum


@dataclass_json
@dataclass
class GetMlModelOutput:
    compute_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeTime' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_iam_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByIamUser' }})
    endpoint_info: Optional[realtimeendpointinfo.RealtimeEndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointInfo' }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataLocationS3' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    ml_model_type: Optional[mlmodeltype_enum.MlModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelType' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recipe' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    score_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScoreThreshold' }})
    score_threshold_last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScoreThresholdLastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInBytes' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[entitystatus_enum.EntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    training_data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataSourceId' }})
    training_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingParameters' }})
    
