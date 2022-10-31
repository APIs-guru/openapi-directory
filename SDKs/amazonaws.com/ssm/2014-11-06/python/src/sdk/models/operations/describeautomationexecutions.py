from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeAutomationExecutionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeAutomationExecutionsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_AUTOMATION_EXECUTIONS = "AmazonSSM.DescribeAutomationExecutions"


@dataclass
class DescribeAutomationExecutionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeAutomationExecutionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAutomationExecutionsRequest:
    query_params: DescribeAutomationExecutionsQueryParams = field(default=None)
    headers: DescribeAutomationExecutionsHeaders = field(default=None)
    request: shared.DescribeAutomationExecutionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAutomationExecutionsResponse:
    content_type: str = field(default=None)
    describe_automation_executions_result: Optional[shared.DescribeAutomationExecutionsResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_filter_key: Optional[Any] = field(default=None)
    invalid_filter_value: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
