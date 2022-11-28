from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DisassociateResourceShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DisassociateResourceShareRequestBody:
    resource_share_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareArn') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principals') }})
    resource_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArns') }})
    

@dataclass
class DisassociateResourceShareRequest:
    headers: DisassociateResourceShareHeaders = field()
    request: DisassociateResourceShareRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateResourceShareResponse:
    content_type: str = field()
    status_code: int = field()
    disassociate_resource_share_response: Optional[shared.DisassociateResourceShareResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_state_transition_exception: Optional[Any] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    resource_share_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
