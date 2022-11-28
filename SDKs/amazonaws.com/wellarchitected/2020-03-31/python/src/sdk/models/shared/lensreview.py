from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LensReview:
    r"""LensReview
    A lens review of a question.
    """
    
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    lens_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensName') }})
    lens_status: Optional[LensStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensStatus') }})
    lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensVersion') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_review_summaries: Optional[List[PillarReviewSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarReviewSummaries') }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskCounts') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
