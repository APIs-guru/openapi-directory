from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automljobconfig
from . import automljobobjective
from . import automlchannel
from . import modeldeployconfig
from . import automloutputdataconfig
from . import problemtype_enum
from . import tag


@dataclass_json
@dataclass
class CreateAutoMlJobRequest:
    auto_ml_job_config: Optional[automljobconfig.AutoMlJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobConfig' }})
    auto_ml_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobName' }})
    auto_ml_job_objective: Optional[automljobobjective.AutoMlJobObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobObjective' }})
    generate_candidate_definitions_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GenerateCandidateDefinitionsOnly' }})
    input_data_config: List[automlchannel.AutoMlChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    model_deploy_config: Optional[modeldeployconfig.ModelDeployConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDeployConfig' }})
    output_data_config: automloutputdataconfig.AutoMlOutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    problem_type: Optional[problemtype_enum.ProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProblemType' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
