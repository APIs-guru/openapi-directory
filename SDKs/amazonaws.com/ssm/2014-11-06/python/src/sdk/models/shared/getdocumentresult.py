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
class GetDocumentResult:
    attachments_content: Optional[List[AttachmentContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentsContent') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    document_format: Optional[DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentFormat') }})
    document_type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentType') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    requires: Optional[List[DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requires') }})
    review_status: Optional[ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewStatus') }})
    status: Optional[DocumentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusInformation') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    
