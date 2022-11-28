from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeEffectivePolicyXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_DESCRIBE_EFFECTIVE_POLICY = "AWSOrganizationsV20161128.DescribeEffectivePolicy"


@dataclass
class DescribeEffectivePolicyHeaders:
    x_amz_target: DescribeEffectivePolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeEffectivePolicyRequest:
    headers: DescribeEffectivePolicyHeaders = field()
    request: shared.DescribeEffectivePolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeEffectivePolicyResponse:
    content_type: str = field()
    status_code: int = field()
    aws_organizations_not_in_use_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    constraint_violation_exception: Optional[Any] = field(default=None)
    describe_effective_policy_response: Optional[shared.DescribeEffectivePolicyResponse] = field(default=None)
    effective_policy_not_found_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    target_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unsupported_api_endpoint_exception: Optional[Any] = field(default=None)
    
