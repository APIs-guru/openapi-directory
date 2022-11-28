from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RenderUITemplateRequest:
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    task: RenderableTask = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Task') }})
    human_task_ui_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiArn') }})
    ui_template: Optional[UITemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UiTemplate') }})
    
