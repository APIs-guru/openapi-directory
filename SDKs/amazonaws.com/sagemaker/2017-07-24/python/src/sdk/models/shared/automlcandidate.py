from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import candidateproperties
from . import candidatestatus_enum
from . import automlcandidatestep
from . import finalautomljobobjectivemetric
from . import automlcontainerdefinition
from . import objectivestatus_enum


@dataclass_json
@dataclass
class AutoMlCandidate:
    candidate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateName' }})
    candidate_properties: Optional[candidateproperties.CandidateProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateProperties' }})
    candidate_status: candidatestatus_enum.CandidateStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateStatus' }})
    candidate_steps: List[automlcandidatestep.AutoMlCandidateStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateSteps' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    final_auto_ml_job_objective_metric: Optional[finalautomljobobjectivemetric.FinalAutoMlJobObjectiveMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalAutoMLJobObjectiveMetric' }})
    inference_containers: Optional[List[automlcontainerdefinition.AutoMlContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceContainers' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    objective_status: objectivestatus_enum.ObjectiveStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectiveStatus' }})
    
