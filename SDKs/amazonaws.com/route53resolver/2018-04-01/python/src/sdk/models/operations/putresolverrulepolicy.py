from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutResolverRulePolicyXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_PUT_RESOLVER_RULE_POLICY = "Route53Resolver.PutResolverRulePolicy"


@dataclass
class PutResolverRulePolicyHeaders:
    x_amz_target: PutResolverRulePolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutResolverRulePolicyRequest:
    headers: PutResolverRulePolicyHeaders = field()
    request: shared.PutResolverRulePolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutResolverRulePolicyResponse:
    content_type: str = field()
    status_code: int = field()
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_policy_document: Optional[Any] = field(default=None)
    put_resolver_rule_policy_response: Optional[shared.PutResolverRulePolicyResponse] = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
