from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CommitTransactionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CommitTransactionRequestBody:
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    secret_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretArn') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    

@dataclass
class CommitTransactionRequest:
    headers: CommitTransactionHeaders = field()
    request: CommitTransactionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CommitTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    commit_transaction_response: Optional[shared.CommitTransactionResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_error: Optional[Any] = field(default=None)
    statement_timeout_exception: Optional[Any] = field(default=None)
    
