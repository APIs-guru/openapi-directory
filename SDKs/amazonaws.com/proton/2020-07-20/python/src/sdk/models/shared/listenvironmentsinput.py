from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmenttemplatefilter


@dataclass_json
@dataclass
class ListEnvironmentsInput:
    environment_templates: Optional[List[environmenttemplatefilter.EnvironmentTemplateFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTemplates' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
