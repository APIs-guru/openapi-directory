from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""StartImportRequestBodyResourceSpecification
    Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
    """
    
    bot_import_specification: Optional[shared.BotImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botImportSpecification') }})
    bot_locale_import_specification: Optional[shared.BotLocaleImportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleImportSpecification') }})
    

@dataclass_json
@dataclass
class StartImportRequestBody:
    import_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importId') }})
    merge_strategy: StartImportRequestBodyMergeStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeStrategy') }})
    resource_specification: StartImportRequestBodyResourceSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    file_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePassword') }})
    

@dataclass
class StartImportRequest:
    headers: StartImportHeaders = field()
    request: StartImportRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartImportResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    start_import_response: Optional[shared.StartImportResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
