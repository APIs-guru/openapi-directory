from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

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
    format: Optional[CreateBatchRequestBodyOptionsFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    

@dataclass_json
@dataclass
class CreateBatchRequestBody:
    domains: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    operation: CreateBatchRequestBodyOperationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    options: Optional[CreateBatchRequestBodyOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass
class CreateBatchRequest:
    request: CreateBatchRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBatchResponse:
    batch: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
