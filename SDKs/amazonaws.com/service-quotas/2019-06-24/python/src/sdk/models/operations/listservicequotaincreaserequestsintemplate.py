from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE = "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate"


@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateHeaders:
    x_amz_target: ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateRequest:
    headers: ListServiceQuotaIncreaseRequestsInTemplateHeaders = field()
    query_params: ListServiceQuotaIncreaseRequestsInTemplateQueryParams = field()
    request: shared.ListServiceQuotaIncreaseRequestsInTemplateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListServiceQuotaIncreaseRequestsInTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    aws_service_access_not_enabled_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    dependency_access_denied_exception: Optional[Any] = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    list_service_quota_increase_requests_in_template_response: Optional[shared.ListServiceQuotaIncreaseRequestsInTemplateResponse] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
