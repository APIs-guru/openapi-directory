from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutLexiconPathParams:
    lexicon_name: str = field(metadata={'path_param': { 'field_name': 'LexiconName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutLexiconHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutLexiconRequestBody:
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    

@dataclass
class PutLexiconRequest:
    headers: PutLexiconHeaders = field()
    path_params: PutLexiconPathParams = field()
    request: PutLexiconRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutLexiconResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_lexicon_exception: Optional[Any] = field(default=None)
    lexicon_size_exceeded_exception: Optional[Any] = field(default=None)
    max_lexeme_length_exceeded_exception: Optional[Any] = field(default=None)
    max_lexicons_number_exceeded_exception: Optional[Any] = field(default=None)
    put_lexicon_output: Optional[dict[str, Any]] = field(default=None)
    service_failure_exception: Optional[Any] = field(default=None)
    unsupported_pls_alphabet_exception: Optional[Any] = field(default=None)
    unsupported_pls_language_exception: Optional[Any] = field(default=None)
    
