from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeAssociationExecutionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeAssociationExecutionsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTIONS = "AmazonSSM.DescribeAssociationExecutions"


@dataclass
class DescribeAssociationExecutionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeAssociationExecutionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAssociationExecutionsRequest:
    query_params: DescribeAssociationExecutionsQueryParams = field(default=None)
    headers: DescribeAssociationExecutionsHeaders = field(default=None)
    request: shared.DescribeAssociationExecutionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAssociationExecutionsResponse:
    association_does_not_exist: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_association_executions_result: Optional[shared.DescribeAssociationExecutionsResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
