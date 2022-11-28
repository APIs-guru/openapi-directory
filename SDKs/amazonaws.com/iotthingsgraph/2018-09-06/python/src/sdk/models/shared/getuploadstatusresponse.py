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
class GetUploadStatusResponse:
    created_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    upload_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    upload_status: UploadStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadStatus') }})
    failure_reason: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    namespace_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceArn') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceVersion') }})
    
