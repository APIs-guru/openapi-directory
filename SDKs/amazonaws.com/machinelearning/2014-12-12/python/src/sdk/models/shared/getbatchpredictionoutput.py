from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitystatus_enum


@dataclass_json
@dataclass
class GetBatchPredictionOutput:
    batch_prediction_data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchPredictionDataSourceId' }})
    batch_prediction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchPredictionId' }})
    compute_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeTime' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_iam_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByIamUser' }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataLocationS3' }})
    invalid_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidRecordCount' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUri' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[entitystatus_enum.EntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalRecordCount' }})
    
