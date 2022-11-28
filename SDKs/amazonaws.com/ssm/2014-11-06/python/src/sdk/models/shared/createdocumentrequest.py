from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDocumentRequest:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    attachments: Optional[List[AttachmentsSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    document_format: Optional[DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentFormat') }})
    document_type: Optional[DocumentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentType') }})
    requires: Optional[List[DocumentRequires]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requires') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    
