from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDocumentMetadataHistoryResponse:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Author') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    metadata: Optional[DocumentMetadataResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
