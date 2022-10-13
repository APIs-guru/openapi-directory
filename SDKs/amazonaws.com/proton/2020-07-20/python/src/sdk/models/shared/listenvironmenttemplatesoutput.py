from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmenttemplatesummary


@dataclass_json
@dataclass
class ListEnvironmentTemplatesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    templates: List[environmenttemplatesummary.EnvironmentTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templates' }})
    
