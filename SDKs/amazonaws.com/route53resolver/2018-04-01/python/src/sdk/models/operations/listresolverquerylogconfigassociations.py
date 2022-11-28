from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListResolverQueryLogConfigAssociationsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListResolverQueryLogConfigAssociationsXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS = "Route53Resolver.ListResolverQueryLogConfigAssociations"


@dataclass
class ListResolverQueryLogConfigAssociationsHeaders:
    x_amz_target: ListResolverQueryLogConfigAssociationsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListResolverQueryLogConfigAssociationsRequest:
    headers: ListResolverQueryLogConfigAssociationsHeaders = field()
    query_params: ListResolverQueryLogConfigAssociationsQueryParams = field()
    request: shared.ListResolverQueryLogConfigAssociationsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListResolverQueryLogConfigAssociationsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    list_resolver_query_log_config_associations_response: Optional[shared.ListResolverQueryLogConfigAssociationsResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
