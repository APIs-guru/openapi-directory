from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchExecuteStatementXAmzTargetEnum(str, Enum):
    REDSHIFT_DATA_BATCH_EXECUTE_STATEMENT = "RedshiftData.BatchExecuteStatement"


@dataclass
class BatchExecuteStatementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchExecuteStatementXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchExecuteStatementRequest:
    headers: BatchExecuteStatementHeaders = field(default=None)
    request: shared.BatchExecuteStatementInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchExecuteStatementResponse:
    active_statements_exceeded_exception: Optional[Any] = field(default=None)
    batch_execute_statement_exception: Optional[Any] = field(default=None)
    batch_execute_statement_output: Optional[shared.BatchExecuteStatementOutput] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
