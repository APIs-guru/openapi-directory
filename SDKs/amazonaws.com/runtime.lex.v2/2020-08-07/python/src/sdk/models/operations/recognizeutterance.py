from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RecognizeUtterancePathParams:
    bot_alias_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = field(default=None, metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    locale_id: str = field(default=None, metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecognizeUtteranceHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    response_content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Response-Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_lex_request_attributes: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-request-attributes', 'style': 'simple', 'explode': False }})
    x_amz_lex_session_state: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-lex-session-state', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RecognizeUtteranceRequestBody:
    input_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputStream' }})
    

@dataclass
class RecognizeUtteranceRequest:
    path_params: RecognizeUtterancePathParams = field(default=None)
    headers: RecognizeUtteranceHeaders = field(default=None)
    request: RecognizeUtteranceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecognizeUtteranceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_gateway_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependency_failed_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    recognize_utterance_response: Optional[shared.RecognizeUtteranceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
