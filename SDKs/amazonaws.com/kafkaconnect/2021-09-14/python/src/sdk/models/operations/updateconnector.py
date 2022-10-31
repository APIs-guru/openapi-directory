from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateConnectorPathParams:
    connector_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'connectorArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConnectorQueryParams:
    current_version: str = field(default=None, metadata={'query_param': { 'field_name': 'currentVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateConnectorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateConnectorRequestBodyCapacity:
    auto_scaling: Optional[shared.AutoScalingUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScaling' }})
    provisioned_capacity: Optional[shared.ProvisionedCapacityUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedCapacity' }})
    

@dataclass_json
@dataclass
class UpdateConnectorRequestBody:
    capacity: UpdateConnectorRequestBodyCapacity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    

@dataclass
class UpdateConnectorRequest:
    path_params: UpdateConnectorPathParams = field(default=None)
    query_params: UpdateConnectorQueryParams = field(default=None)
    headers: UpdateConnectorHeaders = field(default=None)
    request: UpdateConnectorRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConnectorResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_connector_response: Optional[shared.UpdateConnectorResponse] = field(default=None)
    
