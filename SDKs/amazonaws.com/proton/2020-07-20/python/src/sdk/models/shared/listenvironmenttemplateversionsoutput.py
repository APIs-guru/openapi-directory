from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import environmenttemplateversionsummary


@dataclass_json
@dataclass
class ListEnvironmentTemplateVersionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    template_versions: List[environmenttemplateversionsummary.EnvironmentTemplateVersionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateVersions' }})
    
