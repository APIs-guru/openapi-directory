from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import replacementtemplate


@dataclass_json
@dataclass
class ReplacementEmailContent:
    replacement_template: Optional[replacementtemplate.ReplacementTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacementTemplate' }})
    
