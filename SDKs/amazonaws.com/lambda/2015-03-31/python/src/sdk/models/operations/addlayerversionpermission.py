from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddLayerVersionPermissionPathParams:
    layer_name: str = field(default=None, metadata={'path_param': { 'field_name': 'LayerName', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'VersionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddLayerVersionPermissionQueryParams:
    revision_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RevisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class AddLayerVersionPermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddLayerVersionPermissionRequestBody:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    statement_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementId' }})
    

@dataclass
class AddLayerVersionPermissionRequest:
    path_params: AddLayerVersionPermissionPathParams = field(default=None)
    query_params: AddLayerVersionPermissionQueryParams = field(default=None)
    headers: AddLayerVersionPermissionHeaders = field(default=None)
    request: AddLayerVersionPermissionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddLayerVersionPermissionResponse:
    add_layer_version_permission_response: Optional[shared.AddLayerVersionPermissionResponse] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    policy_length_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
