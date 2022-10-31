from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteConnectorPathParams:
    connector_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'connectorArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectorQueryParams:
    current_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currentVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteConnectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectorRequest:
    path_params: DeleteConnectorPathParams = field(default=None)
    query_params: DeleteConnectorQueryParams = field(default=None)
    headers: DeleteConnectorHeaders = field(default=None)
    

@dataclass
class DeleteConnectorResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_connector_response: Optional[shared.DeleteConnectorResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
