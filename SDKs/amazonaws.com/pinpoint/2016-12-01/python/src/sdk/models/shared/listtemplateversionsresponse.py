from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import templateversionsresponse


@dataclass_json
@dataclass
class ListTemplateVersionsResponse:
    template_versions_response: templateversionsresponse.TemplateVersionsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateVersionsResponse' }})
    
