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
class DocumentDescription:
    r"""DocumentDescription
    Describes a Amazon Web Services Systems Manager document (SSM document). 
    """
    
    approved_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedVersion') }})
    attachments_information: Optional[List[AttachmentInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentsInformation') }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Author') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    document_format: Optional[DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentFormat') }})
    document_type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentType') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hash') }})
    hash_type: Optional[DocumentHashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashType') }})
    latest_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    parameters: Optional[List[DocumentParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    pending_review_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingReviewVersion') }})
    platform_types: Optional[List[PlatformTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformTypes') }})
    requires: Optional[List[DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requires') }})
    review_information: Optional[List[ReviewInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewInformation') }})
    review_status: Optional[ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewStatus') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersion') }})
    sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sha1') }})
    status: Optional[DocumentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusInformation') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    
