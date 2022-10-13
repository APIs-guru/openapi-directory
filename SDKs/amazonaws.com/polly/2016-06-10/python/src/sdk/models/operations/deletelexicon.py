from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLexiconPathParams:
    lexicon_name: str = field(default=None, metadata={'path_param': { 'field_name': 'LexiconName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLexiconHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteLexiconRequest:
    path_params: DeleteLexiconPathParams = field(default=None)
    headers: DeleteLexiconHeaders = field(default=None)
    

@dataclass
class DeleteLexiconResponse:
    content_type: str = field(default=None)
    delete_lexicon_output: Optional[dict[str, Any]] = field(default=None)
    lexicon_not_found_exception: Optional[Any] = field(default=None)
    service_failure_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
