from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateConnectionAliasXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_CREATE_CONNECTION_ALIAS = "WorkspacesService.CreateConnectionAlias"


@dataclass
class CreateConnectionAliasHeaders:
    x_amz_target: CreateConnectionAliasXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConnectionAliasRequest:
    headers: CreateConnectionAliasHeaders = field()
    request: shared.CreateConnectionAliasRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectionAliasResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_connection_alias_result: Optional[shared.CreateConnectionAliasResult] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    invalid_resource_state_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    
