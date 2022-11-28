from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateResourcePolicyStatementPathParams:
    resource_arn: str = field(metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateResourcePolicyStatementQueryParams:
    expected_revision_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expectedRevisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateResourcePolicyStatementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateResourcePolicyStatementRequestBodyEffectEnum(str, Enum):
    ALLOW = "Allow"
    DENY = "Deny"


@dataclass_json
@dataclass
class CreateResourcePolicyStatementRequestBody:
    action: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    effect: CreateResourcePolicyStatementRequestBodyEffectEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    principal: List[shared.Principal] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    statement_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statementId') }})
    condition: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

@dataclass
class CreateResourcePolicyStatementRequest:
    headers: CreateResourcePolicyStatementHeaders = field()
    path_params: CreateResourcePolicyStatementPathParams = field()
    query_params: CreateResourcePolicyStatementQueryParams = field()
    request: CreateResourcePolicyStatementRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResourcePolicyStatementResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_resource_policy_statement_response: Optional[shared.CreateResourcePolicyStatementResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    precondition_failed_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
