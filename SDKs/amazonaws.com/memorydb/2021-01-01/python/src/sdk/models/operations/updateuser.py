from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateUserXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UPDATE_USER = "AmazonMemoryDB.UpdateUser"


@dataclass
class UpdateUserHeaders:
    x_amz_target: UpdateUserXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserRequest:
    headers: UpdateUserHeaders = field()
    request: shared.UpdateUserRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateUserResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_user_state_fault: Optional[Any] = field(default=None)
    update_user_response: Optional[shared.UpdateUserResponse] = field(default=None)
    user_not_found_fault: Optional[Any] = field(default=None)
    
