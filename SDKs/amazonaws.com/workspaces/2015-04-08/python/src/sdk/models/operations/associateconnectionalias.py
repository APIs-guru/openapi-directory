from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateConnectionAliasXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_ASSOCIATE_CONNECTION_ALIAS = "WorkspacesService.AssociateConnectionAlias"


@dataclass
class AssociateConnectionAliasHeaders:
    x_amz_target: AssociateConnectionAliasXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateConnectionAliasRequest:
    headers: AssociateConnectionAliasHeaders = field()
    request: shared.AssociateConnectionAliasRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateConnectionAliasResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    associate_connection_alias_result: Optional[shared.AssociateConnectionAliasResult] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    invalid_resource_state_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_associated_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
