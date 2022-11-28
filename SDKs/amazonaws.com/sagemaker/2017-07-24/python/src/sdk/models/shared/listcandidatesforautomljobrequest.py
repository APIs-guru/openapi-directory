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
class ListCandidatesForAutoMlJobRequest:
    auto_ml_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLJobName') }})
    candidate_name_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CandidateNameEquals') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort_by: Optional[CandidateSortByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortBy') }})
    sort_order: Optional[AutoMlSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    status_equals: Optional[CandidateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusEquals') }})
    
