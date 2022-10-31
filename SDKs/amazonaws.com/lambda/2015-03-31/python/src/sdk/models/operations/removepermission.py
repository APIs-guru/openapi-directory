from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RemovePermissionPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    statement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'StatementId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemovePermissionQueryParams:
    qualifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    revision_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RevisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class RemovePermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemovePermissionRequest:
    path_params: RemovePermissionPathParams = field(default=None)
    query_params: RemovePermissionQueryParams = field(default=None)
    headers: RemovePermissionHeaders = field(default=None)
    

@dataclass
class RemovePermissionResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
