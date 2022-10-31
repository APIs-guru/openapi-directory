from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateProactiveEngagementDetailsXAmzTargetEnum(str, Enum):
    AWS_SHIELD_20160616_ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS = "AWSShield_20160616.AssociateProactiveEngagementDetails"


@dataclass
class AssociateProactiveEngagementDetailsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateProactiveEngagementDetailsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateProactiveEngagementDetailsRequest:
    headers: AssociateProactiveEngagementDetailsHeaders = field(default=None)
    request: shared.AssociateProactiveEngagementDetailsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateProactiveEngagementDetailsResponse:
    associate_proactive_engagement_details_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    optimistic_lock_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
