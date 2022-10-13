from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datapreprocessingconfiguration
from . import labelsinputconfiguration
from . import modelstatus_enum


@dataclass_json
@dataclass
class DescribeModelResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_pre_processing_configuration: Optional[datapreprocessingconfiguration.DataPreProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPreProcessingConfiguration' }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    evaluation_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationDataEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationDataStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedReason' }})
    labels_input_configuration: Optional[labelsinputconfiguration.LabelsInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelsInputConfiguration' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    model_metrics: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelMetrics' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    off_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OffCondition' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    training_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_execution_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingExecutionEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_execution_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingExecutionStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
