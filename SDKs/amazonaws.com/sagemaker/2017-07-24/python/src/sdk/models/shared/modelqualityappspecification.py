from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelQualityAppSpecification:
    r"""ModelQualityAppSpecification
    Container image configuration object for the monitoring job.
    """
    
    image_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUri') }})
    container_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerArguments') }})
    container_entrypoint: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerEntrypoint') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    post_analytics_processor_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostAnalyticsProcessorSourceUri') }})
    problem_type: Optional[MonitoringProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProblemType') }})
    record_preprocessor_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordPreprocessorSourceUri') }})
    
