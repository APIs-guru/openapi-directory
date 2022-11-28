from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeAssociationExecutionTargetsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeAssociationExecutionTargetsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_ASSOCIATION_EXECUTION_TARGETS = "AmazonSSM.DescribeAssociationExecutionTargets"


@dataclass
class DescribeAssociationExecutionTargetsHeaders:
    x_amz_target: DescribeAssociationExecutionTargetsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAssociationExecutionTargetsRequest:
    headers: DescribeAssociationExecutionTargetsHeaders = field()
    query_params: DescribeAssociationExecutionTargetsQueryParams = field()
    request: shared.DescribeAssociationExecutionTargetsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAssociationExecutionTargetsResponse:
    content_type: str = field()
    status_code: int = field()
    association_does_not_exist: Optional[Any] = field(default=None)
    association_execution_does_not_exist: Optional[Any] = field(default=None)
    describe_association_execution_targets_result: Optional[shared.DescribeAssociationExecutionTargetsResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    
