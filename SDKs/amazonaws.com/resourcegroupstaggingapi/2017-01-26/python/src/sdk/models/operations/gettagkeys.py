from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetTagKeysQueryParams:
    pagination_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    
class GetTagKeysXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_TAG_KEYS = "ResourceGroupsTaggingAPI_20170126.GetTagKeys"


@dataclass
class GetTagKeysHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetTagKeysXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagKeysRequest:
    query_params: GetTagKeysQueryParams = field(default=None)
    headers: GetTagKeysHeaders = field(default=None)
    request: shared.GetTagKeysInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTagKeysResponse:
    content_type: str = field(default=None)
    get_tag_keys_output: Optional[shared.GetTagKeysOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    pagination_token_expired_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
