from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HumanTaskUISummary:
    r"""HumanTaskUISummary
    Container for human task user interface information.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    human_task_ui_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiArn') }})
    human_task_ui_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiName') }})
    
