from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeHumanTaskUIResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    human_task_ui_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiArn') }})
    human_task_ui_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiName') }})
    ui_template: UITemplateInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UiTemplate') }})
    human_task_ui_status: Optional[HumanTaskUIStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiStatus') }})
    
