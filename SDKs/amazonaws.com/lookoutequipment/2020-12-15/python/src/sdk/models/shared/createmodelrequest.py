from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateModelRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    dataset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    data_pre_processing_configuration: Optional[DataPreProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataPreProcessingConfiguration') }})
    dataset_schema: Optional[DatasetSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSchema') }})
    evaluation_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationDataEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationDataStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    labels_input_configuration: Optional[LabelsInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelsInputConfiguration') }})
    off_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OffCondition') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    training_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
