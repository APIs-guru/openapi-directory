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
class DocumentReviewerResponseSource:
    r"""DocumentReviewerResponseSource
    Information about a reviewer's response to a document review request.
    """
    
    comment: Optional[List[DocumentReviewCommentSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    review_status: Optional[ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewStatus') }})
    reviewer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reviewer') }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
