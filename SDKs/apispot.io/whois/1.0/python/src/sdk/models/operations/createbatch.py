from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateBatchRequestBodyOperationEnum(str, Enum):
    WHOIS = "whois"
    CHECK = "check"

class CreateBatchRequestBodyOptionsFormatEnum(str, Enum):
    RAW = "raw"
    FORMATTED = "formatted"
    JSON = "json"


@dataclass_json
@dataclass
class CreateBatchRequestBodyOptions:
    format: Optional[CreateBatchRequestBodyOptionsFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclass
class CreateBatchRequestBody:
    domains: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    operation: CreateBatchRequestBodyOperationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    options: Optional[CreateBatchRequestBodyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

@dataclass
class CreateBatchRequest:
    request: CreateBatchRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch: Optional[Any] = field(default=None)
    
