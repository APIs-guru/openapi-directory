from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgeoutputconfig
from . import tag


@dataclass_json
@dataclass
class CreateEdgePackagingJobRequest:
    compilation_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    edge_packaging_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobName' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    output_config: edgeoutputconfig.EdgeOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceKey' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
