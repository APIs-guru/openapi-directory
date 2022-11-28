from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchExecuteStatementXAmzTargetEnum(str, Enum):
    REDSHIFT_DATA_BATCH_EXECUTE_STATEMENT = "RedshiftData.BatchExecuteStatement"


@dataclass
class BatchExecuteStatementHeaders:
    x_amz_target: BatchExecuteStatementXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchExecuteStatementRequest:
    headers: BatchExecuteStatementHeaders = field()
    request: shared.BatchExecuteStatementInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchExecuteStatementResponse:
    content_type: str = field()
    status_code: int = field()
    active_statements_exceeded_exception: Optional[Any] = field(default=None)
    batch_execute_statement_exception: Optional[Any] = field(default=None)
    batch_execute_statement_output: Optional[shared.BatchExecuteStatementOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
