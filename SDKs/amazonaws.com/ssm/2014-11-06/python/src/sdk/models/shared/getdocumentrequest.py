from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDocumentRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    document_format: Optional[DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentFormat') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    
