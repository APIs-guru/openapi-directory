from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class EnableDomainTransferLockXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_TRANSFER_LOCK = "Route53Domains_v20140515.EnableDomainTransferLock"


@dataclass
class EnableDomainTransferLockHeaders:
    x_amz_target: EnableDomainTransferLockXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnableDomainTransferLockRequest:
    headers: EnableDomainTransferLockHeaders = field()
    request: shared.EnableDomainTransferLockRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnableDomainTransferLockResponse:
    content_type: str = field()
    status_code: int = field()
    duplicate_request: Optional[Any] = field(default=None)
    enable_domain_transfer_lock_response: Optional[shared.EnableDomainTransferLockResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    tld_rules_violation: Optional[Any] = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
