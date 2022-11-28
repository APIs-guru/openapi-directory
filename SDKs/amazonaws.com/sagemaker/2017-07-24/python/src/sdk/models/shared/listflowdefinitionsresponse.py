from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFlowDefinitionsResponse:
    flow_definition_summaries: List[FlowDefinitionSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
