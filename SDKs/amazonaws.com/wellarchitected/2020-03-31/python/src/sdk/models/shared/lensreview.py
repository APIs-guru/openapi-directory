from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lensstatus_enum
from . import pillarreviewsummary


@dataclass_json
@dataclass
class LensReview:
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    lens_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensName' }})
    lens_status: Optional[lensstatus_enum.LensStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensStatus' }})
    lens_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensVersion' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pillar_review_summaries: Optional[List[pillarreviewsummary.PillarReviewSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarReviewSummaries' }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskCounts' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
