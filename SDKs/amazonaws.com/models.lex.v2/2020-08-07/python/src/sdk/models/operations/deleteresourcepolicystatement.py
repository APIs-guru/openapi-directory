from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteResourcePolicyStatementPathParams:
    resource_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    statement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'statementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteResourcePolicyStatementQueryParams:
    expected_revision_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expectedRevisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteResourcePolicyStatementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteResourcePolicyStatementRequest:
    path_params: DeleteResourcePolicyStatementPathParams = field(default=None)
    query_params: DeleteResourcePolicyStatementQueryParams = field(default=None)
    headers: DeleteResourcePolicyStatementHeaders = field(default=None)
    

@dataclass
class DeleteResourcePolicyStatementResponse:
    content_type: str = field(default=None)
    delete_resource_policy_statement_response: Optional[shared.DeleteResourcePolicyStatementResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
