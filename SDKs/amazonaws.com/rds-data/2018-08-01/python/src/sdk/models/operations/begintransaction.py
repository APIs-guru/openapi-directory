from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BeginTransactionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class BeginTransactionRequestBody:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    secret_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretArn' }})
    

@dataclass
class BeginTransactionRequest:
    headers: BeginTransactionHeaders = field(default=None)
    request: BeginTransactionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BeginTransactionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    begin_transaction_response: Optional[shared.BeginTransactionResponse] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    service_unavailable_error: Optional[Any] = field(default=None)
    statement_timeout_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
