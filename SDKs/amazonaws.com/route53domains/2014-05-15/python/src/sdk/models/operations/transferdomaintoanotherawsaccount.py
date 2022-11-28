from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class TransferDomainToAnotherAwsAccountXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"


@dataclass
class TransferDomainToAnotherAwsAccountHeaders:
    x_amz_target: TransferDomainToAnotherAwsAccountXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransferDomainToAnotherAwsAccountRequest:
    headers: TransferDomainToAnotherAwsAccountHeaders = field()
    request: shared.TransferDomainToAnotherAwsAccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransferDomainToAnotherAwsAccountResponse:
    content_type: str = field()
    status_code: int = field()
    duplicate_request: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    transfer_domain_to_another_aws_account_response: Optional[shared.TransferDomainToAnotherAwsAccountResponse] = field(default=None)
    
