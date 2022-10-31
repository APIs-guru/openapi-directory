from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"


@dataclass
class AcceptDomainTransferFromAnotherAwsAccountHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptDomainTransferFromAnotherAwsAccountRequest:
    headers: AcceptDomainTransferFromAnotherAwsAccountHeaders = field(default=None)
    request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AcceptDomainTransferFromAnotherAwsAccountResponse:
    accept_domain_transfer_from_another_aws_account_response: Optional[shared.AcceptDomainTransferFromAnotherAwsAccountResponse] = field(default=None)
    content_type: str = field(default=None)
    domain_limit_exceeded: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
