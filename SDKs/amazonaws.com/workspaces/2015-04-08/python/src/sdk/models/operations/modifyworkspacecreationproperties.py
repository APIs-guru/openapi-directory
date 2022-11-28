from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ModifyWorkspaceCreationPropertiesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_MODIFY_WORKSPACE_CREATION_PROPERTIES = "WorkspacesService.ModifyWorkspaceCreationProperties"


@dataclass
class ModifyWorkspaceCreationPropertiesHeaders:
    x_amz_target: ModifyWorkspaceCreationPropertiesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyWorkspaceCreationPropertiesRequest:
    headers: ModifyWorkspaceCreationPropertiesHeaders = field()
    request: shared.ModifyWorkspaceCreationPropertiesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyWorkspaceCreationPropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    modify_workspace_creation_properties_result: Optional[dict[str, Any]] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
