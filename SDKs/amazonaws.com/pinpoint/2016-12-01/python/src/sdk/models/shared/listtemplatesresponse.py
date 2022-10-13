from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import templatesresponse


@dataclass_json
@dataclass
class ListTemplatesResponse:
    templates_response: templatesresponse.TemplatesResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplatesResponse' }})
    
