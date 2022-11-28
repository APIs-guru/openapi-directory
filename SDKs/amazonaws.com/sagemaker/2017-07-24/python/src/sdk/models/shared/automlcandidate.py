from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlCandidate:
    r"""AutoMlCandidate
    Information about a candidate produced by an AutoML training job, including its status, steps, and other properties.
    """
    
    candidate_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateName') }})
    candidate_status: CandidateStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateStatus') }})
    candidate_steps: List[AutoMlCandidateStep] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateSteps') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    objective_status: ObjectiveStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectiveStatus') }})
    candidate_properties: Optional[CandidateProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateProperties') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    final_auto_ml_job_objective_metric: Optional[FinalAutoMlJobObjectiveMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalAutoMLJobObjectiveMetric') }})
    inference_containers: Optional[List[AutoMlContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceContainers') }})
    
