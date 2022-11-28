from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"


@dataclass
class RejectDomainTransferFromAnotherAwsAccountHeaders:
    x_amz_target: RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RejectDomainTransferFromAnotherAwsAccountRequest:
    headers: RejectDomainTransferFromAnotherAwsAccountHeaders = field()
    request: shared.RejectDomainTransferFromAnotherAwsAccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectDomainTransferFromAnotherAwsAccountResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    reject_domain_transfer_from_another_aws_account_response: Optional[shared.RejectDomainTransferFromAnotherAwsAccountResponse] = field(default=None)
    
