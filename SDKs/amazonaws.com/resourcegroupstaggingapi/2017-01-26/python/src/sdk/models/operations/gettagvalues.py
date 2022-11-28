from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetTagValuesQueryParams:
    pagination_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    
class GetTagValuesXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_TAG_VALUES = "ResourceGroupsTaggingAPI_20170126.GetTagValues"


@dataclass
class GetTagValuesHeaders:
    x_amz_target: GetTagValuesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagValuesRequest:
    headers: GetTagValuesHeaders = field()
    query_params: GetTagValuesQueryParams = field()
    request: shared.GetTagValuesInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTagValuesResponse:
    content_type: str = field()
    status_code: int = field()
    get_tag_values_output: Optional[shared.GetTagValuesOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    pagination_token_expired_exception: Optional[Any] = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
