from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEdgePackagingJobRequest:
    compilation_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobName') }})
    edge_packaging_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobName') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    output_config: EdgeOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKey') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
