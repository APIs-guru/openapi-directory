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
class CreateAutoMlJobRequest:
    auto_ml_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobName') }})
    input_data_config: List[AutoMlChannel] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    output_data_config: AutoMlOutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    auto_ml_job_config: Optional[AutoMlJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobConfig') }})
    auto_ml_job_objective: Optional[AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobObjective') }})
    generate_candidate_definitions_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerateCandidateDefinitionsOnly') }})
    model_deploy_config: Optional[ModelDeployConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDeployConfig') }})
    problem_type: Optional[ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProblemType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
