from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import monitoringproblemtype_enum


@dataclass_json
@dataclass
class ModelQualityAppSpecification:
    container_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerArguments' }})
    container_entrypoint: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerEntrypoint' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    image_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUri' }})
    post_analytics_processor_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostAnalyticsProcessorSourceUri' }})
    problem_type: Optional[monitoringproblemtype_enum.MonitoringProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProblemType' }})
    record_preprocessor_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordPreprocessorSourceUri' }})
    
