from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import renderabletask
from . import uitemplate


@dataclass_json
@dataclass
class RenderUITemplateRequest:
    human_task_ui_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiArn' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    task: renderabletask.RenderableTask = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Task' }})
    ui_template: Optional[uitemplate.UITemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiTemplate' }})
    
