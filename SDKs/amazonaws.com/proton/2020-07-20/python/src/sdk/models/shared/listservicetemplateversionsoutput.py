from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicetemplateversionsummary


@dataclass_json
@dataclass
class ListServiceTemplateVersionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    template_versions: List[servicetemplateversionsummary.ServiceTemplateVersionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateVersions' }})
    
