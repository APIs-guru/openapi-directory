from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDocumentTextDetectionResponse:
    blocks: Optional[List[Block]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocks') }})
    detect_document_text_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectDocumentTextModelVersion') }})
    document_metadata: Optional[DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    warnings: Optional[List[Warning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    
