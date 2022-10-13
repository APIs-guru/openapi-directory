from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import uploadstatus_enum


@dataclass_json
@dataclass
class GetUploadStatusResponse:
    created_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    namespace_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceArn' }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceVersion' }})
    upload_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    upload_status: uploadstatus_enum.UploadStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadStatus' }})
    
