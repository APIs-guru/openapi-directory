from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLexiconPathParams:
    lexicon_name: str = field(metadata={'path_param': { 'field_name': 'LexiconName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLexiconHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLexiconRequest:
    headers: GetLexiconHeaders = field()
    path_params: GetLexiconPathParams = field()
    

@dataclass
class GetLexiconResponse:
    content_type: str = field()
    status_code: int = field()
    get_lexicon_output: Optional[shared.GetLexiconOutput] = field(default=None)
    lexicon_not_found_exception: Optional[Any] = field(default=None)
    service_failure_exception: Optional[Any] = field(default=None)
    
