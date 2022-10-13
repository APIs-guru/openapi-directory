from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simpleemailpart
from . import simpleemailpart
from . import simpleemailpart


@dataclass_json
@dataclass
class SimpleEmail:
    html_part: Optional[simpleemailpart.SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlPart' }})
    subject: Optional[simpleemailpart.SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    text_part: Optional[simpleemailpart.SimpleEmailPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextPart' }})
    
