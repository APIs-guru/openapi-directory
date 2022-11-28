from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeScanningAlert:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_by: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_by') }})
    dismissed_reason: CodeScanningAlertDismissedReasonEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_reason') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    rule: CodeScanningAlertRule = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    state: CodeScanningAlertStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tool: CodeScanningAnalysisTool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    instances: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
