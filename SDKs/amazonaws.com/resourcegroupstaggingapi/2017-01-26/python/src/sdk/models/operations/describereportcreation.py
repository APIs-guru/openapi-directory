from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeReportCreationXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_DESCRIBE_REPORT_CREATION = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation"


@dataclass
class DescribeReportCreationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeReportCreationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeReportCreationRequest:
    headers: DescribeReportCreationHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeReportCreationResponse:
    constraint_violation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_report_creation_output: Optional[shared.DescribeReportCreationOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
