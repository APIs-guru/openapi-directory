from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class MoveAccountXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_MOVE_ACCOUNT = "AWSOrganizationsV20161128.MoveAccount"


@dataclass
class MoveAccountHeaders:
    x_amz_target: MoveAccountXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class MoveAccountRequest:
    headers: MoveAccountHeaders = field()
    request: shared.MoveAccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveAccountResponse:
    content_type: str = field()
    status_code: int = field()
    aws_organizations_not_in_use_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    account_not_found_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    destination_parent_not_found_exception: Optional[Any] = field(default=None)
    duplicate_account_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    source_parent_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
