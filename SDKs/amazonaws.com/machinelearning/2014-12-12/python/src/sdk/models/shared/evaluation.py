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
class Evaluation:
    r"""Evaluation
    <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
    """
    
    compute_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeTime') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_iam_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByIamUser') }})
    evaluation_data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationDataSourceId') }})
    evaluation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationId') }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataLocationS3') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ml_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    performance_metrics: Optional[PerformanceMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformanceMetrics') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[EntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
