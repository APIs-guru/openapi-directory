from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowdefinitionsummary


@dataclass_json
@dataclass
class ListFlowDefinitionsResponse:
    flow_definition_summaries: List[flowdefinitionsummary.FlowDefinitionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
