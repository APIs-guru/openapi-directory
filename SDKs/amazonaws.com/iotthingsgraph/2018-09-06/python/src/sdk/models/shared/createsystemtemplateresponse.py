from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systemtemplatesummary


@dataclass_json
@dataclass
class CreateSystemTemplateResponse:
    summary: Optional[systemtemplatesummary.SystemTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
