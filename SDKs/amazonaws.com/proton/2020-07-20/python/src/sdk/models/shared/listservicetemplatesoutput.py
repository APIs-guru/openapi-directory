from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicetemplatesummary


@dataclass_json
@dataclass
class ListServiceTemplatesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    templates: List[servicetemplatesummary.ServiceTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templates' }})
    
