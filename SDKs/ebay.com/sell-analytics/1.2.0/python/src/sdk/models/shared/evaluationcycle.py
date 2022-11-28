from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EvaluationCycle:
    r"""EvaluationCycle
    This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.
    """
    
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    evaluation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationDate') }})
    evaluation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationType') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
