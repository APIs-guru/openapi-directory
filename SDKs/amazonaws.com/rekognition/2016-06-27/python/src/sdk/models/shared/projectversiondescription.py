from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import evaluationresult
from . import groundtruthmanifest
from . import outputconfig
from . import projectversionstatus_enum
from . import testingdataresult
from . import trainingdataresult


@dataclass_json
@dataclass
class ProjectVersionDescription:
    billable_training_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillableTrainingTimeInSeconds' }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result: Optional[evaluationresult.EvaluationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResult' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    manifest_summary: Optional[groundtruthmanifest.GroundTruthManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManifestSummary' }})
    min_inference_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinInferenceUnits' }})
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    project_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectVersionArn' }})
    status: Optional[projectversionstatus_enum.ProjectVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    testing_data_result: Optional[testingdataresult.TestingDataResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestingDataResult' }})
    training_data_result: Optional[trainingdataresult.TrainingDataResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingDataResult' }})
    training_end_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
