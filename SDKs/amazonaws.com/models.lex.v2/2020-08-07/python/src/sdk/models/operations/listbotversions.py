from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListBotVersionsPathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBotVersionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBotVersionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListBotVersionsRequestBodySortBy:
    r"""ListBotVersionsRequestBodySortBy
    Specifies attributes for sorting a list of bot versions.
    """
    
    attribute: Optional[shared.BotVersionSortAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    

@dataclass_json
@dataclass
class ListBotVersionsRequestBody:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[ListBotVersionsRequestBodySortBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    

@dataclass
class ListBotVersionsRequest:
    headers: ListBotVersionsHeaders = field()
    path_params: ListBotVersionsPathParams = field()
    query_params: ListBotVersionsQueryParams = field()
    request: ListBotVersionsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListBotVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_bot_versions_response: Optional[shared.ListBotVersionsResponse] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
