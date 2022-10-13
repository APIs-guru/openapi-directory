from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import emailtemplatemetadata


@dataclass_json
@dataclass
class ListEmailTemplatesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    templates_metadata: Optional[List[emailtemplatemetadata.EmailTemplateMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplatesMetadata' }})
    
