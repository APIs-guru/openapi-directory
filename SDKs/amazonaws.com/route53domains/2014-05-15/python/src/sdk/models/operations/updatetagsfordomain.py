from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateTagsForDomainXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_UPDATE_TAGS_FOR_DOMAIN = "Route53Domains_v20140515.UpdateTagsForDomain"


@dataclass
class UpdateTagsForDomainHeaders:
    x_amz_target: UpdateTagsForDomainXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTagsForDomainRequest:
    headers: UpdateTagsForDomainHeaders = field()
    request: shared.UpdateTagsForDomainRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTagsForDomainResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    update_tags_for_domain_response: Optional[dict[str, Any]] = field(default=None)
    
