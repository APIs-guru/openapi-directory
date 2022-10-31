from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeEffectiveInstanceAssociationsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeEffectiveInstanceAssociationsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS = "AmazonSSM.DescribeEffectiveInstanceAssociations"


@dataclass
class DescribeEffectiveInstanceAssociationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeEffectiveInstanceAssociationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeEffectiveInstanceAssociationsRequest:
    query_params: DescribeEffectiveInstanceAssociationsQueryParams = field(default=None)
    headers: DescribeEffectiveInstanceAssociationsHeaders = field(default=None)
    request: shared.DescribeEffectiveInstanceAssociationsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeEffectiveInstanceAssociationsResponse:
    content_type: str = field(default=None)
    describe_effective_instance_associations_result: Optional[shared.DescribeEffectiveInstanceAssociationsResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
