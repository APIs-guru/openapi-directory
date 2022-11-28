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
class DescribeAutoMlJobResponse:
    auto_ml_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArn') }})
    auto_ml_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobName') }})
    auto_ml_job_secondary_status: AutoMlJobSecondaryStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobSecondaryStatus') }})
    auto_ml_job_status: AutoMlJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobStatus') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: List[AutoMlChannel] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_data_config: AutoMlOutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    auto_ml_job_artifacts: Optional[AutoMlJobArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobArtifacts') }})
    auto_ml_job_config: Optional[AutoMlJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobConfig') }})
    auto_ml_job_objective: Optional[AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobObjective') }})
    best_candidate: Optional[AutoMlCandidate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BestCandidate') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    generate_candidate_definitions_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateCandidateDefinitionsOnly') }})
    model_deploy_config: Optional[ModelDeployConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDeployConfig') }})
    model_deploy_result: Optional[ModelDeployResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDeployResult') }})
    partial_failure_reasons: Optional[List[AutoMlPartialFailureReason]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartialFailureReasons') }})
    problem_type: Optional[ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProblemType') }})
    resolved_attributes: Optional[ResolvedAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResolvedAttributes') }})
    
