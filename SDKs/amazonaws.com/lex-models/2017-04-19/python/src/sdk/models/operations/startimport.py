from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartImportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class StartImportRequestBodyMergeStrategyEnum(str, Enum):
    OVERWRITE_LATEST = "OVERWRITE_LATEST"
    FAIL_ON_CONFLICT = "FAIL_ON_CONFLICT"

class StartImportRequestBodyResourceTypeEnum(str, Enum):
    BOT = "BOT"
    INTENT = "INTENT"
    SLOT_TYPE = "SLOT_TYPE"


@dataclass_json
@dataclass
class StartImportRequestBody:
    merge_strategy: StartImportRequestBodyMergeStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeStrategy' }})
    payload: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    resource_type: StartImportRequestBodyResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class StartImportRequest:
    headers: StartImportHeaders = field(default=None)
    request: StartImportRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartImportResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    start_import_response: Optional[shared.StartImportResponse] = field(default=None)
    status_code: int = field(default=None)
    
