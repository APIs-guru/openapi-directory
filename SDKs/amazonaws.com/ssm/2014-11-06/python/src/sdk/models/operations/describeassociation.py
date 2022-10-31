from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeAssociationXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_ASSOCIATION = "AmazonSSM.DescribeAssociation"


@dataclass
class DescribeAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeAssociationRequest:
    headers: DescribeAssociationHeaders = field(default=None)
    request: shared.DescribeAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeAssociationResponse:
    association_does_not_exist: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_association_result: Optional[shared.DescribeAssociationResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_association_version: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
