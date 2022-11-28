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
class CreateExportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateExportRequestBodyFileFormatEnum(str, Enum):
    LEX_JSON = "LexJson"


@dataclass_json
@dataclass
class CreateExportRequestBodyResourceSpecification:
    r"""CreateExportRequestBodyResourceSpecification
    Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
    """
    
    bot_export_specification: Optional[shared.BotExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botExportSpecification') }})
    bot_locale_export_specification: Optional[shared.BotLocaleExportSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleExportSpecification') }})
    

@dataclass_json
@dataclass
class CreateExportRequestBody:
    file_format: CreateExportRequestBodyFileFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    resource_specification: CreateExportRequestBodyResourceSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    file_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePassword') }})
    

@dataclass
class CreateExportRequest:
    headers: CreateExportHeaders = field()
    request: CreateExportRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateExportResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_export_response: Optional[shared.CreateExportResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
