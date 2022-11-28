from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListOpsItemRelatedItemsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListOpsItemRelatedItemsXAmzTargetEnum(str, Enum):
    AMAZON_SSM_LIST_OPS_ITEM_RELATED_ITEMS = "AmazonSSM.ListOpsItemRelatedItems"


@dataclass
class ListOpsItemRelatedItemsHeaders:
    x_amz_target: ListOpsItemRelatedItemsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOpsItemRelatedItemsRequest:
    headers: ListOpsItemRelatedItemsHeaders = field()
    query_params: ListOpsItemRelatedItemsQueryParams = field()
    request: shared.ListOpsItemRelatedItemsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOpsItemRelatedItemsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    list_ops_item_related_items_response: Optional[shared.ListOpsItemRelatedItemsResponse] = field(default=None)
    ops_item_invalid_parameter_exception: Optional[Any] = field(default=None)
    
