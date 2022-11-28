from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CacheHitResult:
    r"""CacheHitResult
    Details on the cache hit of a pipeline execution step.
    """
    
    source_pipeline_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePipelineExecutionArn') }})
    
