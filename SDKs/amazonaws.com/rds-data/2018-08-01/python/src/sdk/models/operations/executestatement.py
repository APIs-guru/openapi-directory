from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExecuteStatementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ExecuteStatementRequestBodyResultSetOptions:
    decimal_return_type: Optional[shared.DecimalReturnTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimalReturnType' }})
    

@dataclass_json
@dataclass
class ExecuteStatementRequestBody:
    continue_after_timeout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueAfterTimeout' }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    include_result_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeResultMetadata' }})
    parameters: Optional[List[shared.SQLParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    result_set_options: Optional[ExecuteStatementRequestBodyResultSetOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultSetOptions' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    secret_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretArn' }})
    sql: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

@dataclass
class ExecuteStatementRequest:
    headers: ExecuteStatementHeaders = field(default=None)
    request: ExecuteStatementRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteStatementResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    execute_statement_response: Optional[shared.ExecuteStatementResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    service_unavailable_error: Optional[Any] = field(default=None)
    statement_timeout_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
