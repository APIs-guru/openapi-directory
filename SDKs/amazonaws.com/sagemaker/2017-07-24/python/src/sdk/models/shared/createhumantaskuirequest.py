from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import uitemplate


@dataclass_json
@dataclass
class CreateHumanTaskUIRequest:
    human_task_ui_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    ui_template: uitemplate.UITemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiTemplate' }})
    
