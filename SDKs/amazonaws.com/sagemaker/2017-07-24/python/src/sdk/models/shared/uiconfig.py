from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UIConfig:
    human_task_ui_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiArn' }})
    ui_template_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiTemplateS3Uri' }})
    
