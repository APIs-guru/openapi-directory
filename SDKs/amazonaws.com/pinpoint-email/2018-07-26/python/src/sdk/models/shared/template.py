from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Template:
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateArn' }})
    template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateData' }})
    
