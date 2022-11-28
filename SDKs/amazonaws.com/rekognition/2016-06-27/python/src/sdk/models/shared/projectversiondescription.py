from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectVersionDescription:
    r"""ProjectVersionDescription
    The description of a version of a model.
    """
    
    billable_training_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillableTrainingTimeInSeconds') }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result: Optional[EvaluationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResult') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    manifest_summary: Optional[GroundTruthManifest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManifestSummary') }})
    min_inference_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinInferenceUnits') }})
    output_config: Optional[OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    project_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionArn') }})
    status: Optional[ProjectVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    testing_data_result: Optional[TestingDataResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestingDataResult') }})
    training_data_result: Optional[TrainingDataResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataResult') }})
    training_end_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingEndTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
