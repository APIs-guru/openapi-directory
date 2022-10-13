from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoringjobdefinitionsummary


@dataclass_json
@dataclass
class ListDataQualityJobDefinitionsResponse:
    job_definition_summaries: List[monitoringjobdefinitionsummary.MonitoringJobDefinitionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobDefinitionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
