from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automljobartifacts
from . import automljobconfig
from . import automljobobjective
from . import automljobsecondarystatus_enum
from . import automljobstatus_enum
from . import automlcandidate
from . import automlchannel
from . import modeldeployconfig
from . import modeldeployresult
from . import automloutputdataconfig
from . import automlpartialfailurereason
from . import problemtype_enum
from . import resolvedattributes


@dataclass_json
@dataclass
class DescribeAutoMlJobResponse:
    auto_ml_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArn' }})
    auto_ml_job_artifacts: Optional[automljobartifacts.AutoMlJobArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobArtifacts' }})
    auto_ml_job_config: Optional[automljobconfig.AutoMlJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobConfig' }})
    auto_ml_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobName' }})
    auto_ml_job_objective: Optional[automljobobjective.AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobObjective' }})
    auto_ml_job_secondary_status: automljobsecondarystatus_enum.AutoMlJobSecondaryStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobSecondaryStatus' }})
    auto_ml_job_status: automljobstatus_enum.AutoMlJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobStatus' }})
    best_candidate: Optional[automlcandidate.AutoMlCandidate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BestCandidate' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    generate_candidate_definitions_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GenerateCandidateDefinitionsOnly' }})
    input_data_config: List[automlchannel.AutoMlChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_deploy_config: Optional[modeldeployconfig.ModelDeployConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDeployConfig' }})
    model_deploy_result: Optional[modeldeployresult.ModelDeployResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDeployResult' }})
    output_data_config: automloutputdataconfig.AutoMlOutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    partial_failure_reasons: Optional[List[automlpartialfailurereason.AutoMlPartialFailureReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartialFailureReasons' }})
    problem_type: Optional[problemtype_enum.ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProblemType' }})
    resolved_attributes: Optional[resolvedattributes.ResolvedAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolvedAttributes' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
