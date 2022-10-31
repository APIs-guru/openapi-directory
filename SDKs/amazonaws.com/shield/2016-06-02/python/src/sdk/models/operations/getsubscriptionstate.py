from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetSubscriptionStateXAmzTargetEnum(str, Enum):
    AWS_SHIELD_20160616_GET_SUBSCRIPTION_STATE = "AWSShield_20160616.GetSubscriptionState"


@dataclass
class GetSubscriptionStateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetSubscriptionStateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionStateRequest:
    headers: GetSubscriptionStateHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSubscriptionStateResponse:
    content_type: str = field(default=None)
    get_subscription_state_response: Optional[shared.GetSubscriptionStateResponse] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
