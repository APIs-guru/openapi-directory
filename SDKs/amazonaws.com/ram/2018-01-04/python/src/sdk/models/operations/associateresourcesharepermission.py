from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AssociateResourceSharePermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class AssociateResourceSharePermissionRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    permission_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionArn' }})
    permission_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionVersion' }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replace' }})
    resource_share_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareArn' }})
    

@dataclass
class AssociateResourceSharePermissionRequest:
    headers: AssociateResourceSharePermissionHeaders = field(default=None)
    request: AssociateResourceSharePermissionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateResourceSharePermissionResponse:
    associate_resource_share_permission_response: Optional[shared.AssociateResourceSharePermissionResponse] = field(default=None)
    content_type: str = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
