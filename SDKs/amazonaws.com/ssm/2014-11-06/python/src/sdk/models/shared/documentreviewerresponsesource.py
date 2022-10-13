from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentreviewcommentsource
from . import reviewstatus_enum


@dataclass_json
@dataclass
class DocumentReviewerResponseSource:
    comment: Optional[List[documentreviewcommentsource.DocumentReviewCommentSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    review_status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewStatus' }})
    reviewer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reviewer' }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
