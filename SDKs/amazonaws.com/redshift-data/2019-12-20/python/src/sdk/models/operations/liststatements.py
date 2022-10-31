from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListStatementsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListStatementsXAmzTargetEnum(str, Enum):
    REDSHIFT_DATA_LIST_STATEMENTS = "RedshiftData.ListStatements"


@dataclass
class ListStatementsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListStatementsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListStatementsRequest:
    query_params: ListStatementsQueryParams = field(default=None)
    headers: ListStatementsHeaders = field(default=None)
    request: shared.ListStatementsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStatementsResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_statements_response: Optional[shared.ListStatementsResponse] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
