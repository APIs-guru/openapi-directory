from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartImportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartImportRequestBodyMergeStrategyEnum(str, Enum):
    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"


@dataclass_json
@dataclass
class StartImportRequestBodyResourceSpecification:
    bot_import_specification: Optional[shared.BotImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botImportSpecification' }})
    bot_locale_import_specification: Optional[shared.BotLocaleImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleImportSpecification' }})
    

@dataclass_json
@dataclass
class StartImportRequestBody:
    file_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePassword' }})
    import_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importId' }})
    merge_strategy: StartImportRequestBodyMergeStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeStrategy' }})
    resource_specification: StartImportRequestBodyResourceSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpecification' }})
    

@dataclass
class StartImportRequest:
    headers: StartImportHeaders = field(default=None)
    request: StartImportRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartImportResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_import_response: Optional[shared.StartImportResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
