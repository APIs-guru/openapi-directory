from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostContentPathParams:
    bot_alias: str = field(metadata={'path_param': { 'field_name': 'botAlias', 'style': 'simple', 'explode': False }})
    bot_name: str = field(metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContentHeaders:
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_lex_active_contexts: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-active-contexts', 'style': 'simple', 'explode': False }})
    x_amz_lex_request_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-request-attributes', 'style': 'simple', 'explode': False }})
    x_amz_lex_session_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-session-attributes', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostContentRequestBody:
    input_stream: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputStream') }})
    

@dataclass
class PostContentRequest:
    headers: PostContentHeaders = field()
    path_params: PostContentPathParams = field()
    request: PostContentRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContentResponse:
    content_type: str = field()
    status_code: int = field()
    bad_gateway_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    dependency_failed_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    loop_detected_exception: Optional[Any] = field(default=None)
    not_acceptable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    post_content_response: Optional[shared.PostContentResponse] = field(default=None)
    request_timeout_exception: Optional[Any] = field(default=None)
    unsupported_media_type_exception: Optional[Any] = field(default=None)
    
