from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datapreprocessingconfiguration
from . import datasetschema
from . import labelsinputconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateModelRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    data_pre_processing_configuration: Optional[datapreprocessingconfiguration.DataPreProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPreProcessingConfiguration' }})
    dataset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    dataset_schema: Optional[datasetschema.DatasetSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetSchema' }})
    evaluation_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationDataEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationDataStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    labels_input_configuration: Optional[labelsinputconfiguration.LabelsInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelsInputConfiguration' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    off_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OffCondition' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    training_data_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_data_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
