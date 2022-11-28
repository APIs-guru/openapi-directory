from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddLayerVersionPermissionPathParams:
    layer_name: str = field(metadata={'path_param': { 'field_name': 'LayerName', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'VersionNumber', 'style': 'simple', 'explode': False }})
    

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
    action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    principal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    statement_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementId') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    

@dataclass
class AddLayerVersionPermissionRequest:
    headers: AddLayerVersionPermissionHeaders = field()
    path_params: AddLayerVersionPermissionPathParams = field()
    query_params: AddLayerVersionPermissionQueryParams = field()
    request: AddLayerVersionPermissionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddLayerVersionPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    add_layer_version_permission_response: Optional[shared.AddLayerVersionPermissionResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    policy_length_exceeded_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
