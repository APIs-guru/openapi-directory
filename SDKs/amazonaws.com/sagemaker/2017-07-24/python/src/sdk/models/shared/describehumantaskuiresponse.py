from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import humantaskuistatus_enum
from . import uitemplateinfo


@dataclass_json
@dataclass
class DescribeHumanTaskUIResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    human_task_ui_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiArn' }})
    human_task_ui_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiName' }})
    human_task_ui_status: Optional[humantaskuistatus_enum.HumanTaskUIStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiStatus' }})
    ui_template: uitemplateinfo.UITemplateInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiTemplate' }})
    
