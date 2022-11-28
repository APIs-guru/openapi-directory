from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListBotLocalesPathParams:
    bot_id: str = field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBotLocalesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBotLocalesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListBotLocalesRequestBodySortBy:
    r"""ListBotLocalesRequestBodySortBy
    Specifies attributes for sorting a list of bot locales.
    """
    
    attribute: Optional[shared.BotLocaleSortAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    

@dataclass_json
@dataclass
class ListBotLocalesRequestBody:
    filters: Optional[List[shared.BotLocaleFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[ListBotLocalesRequestBodySortBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    

@dataclass
class ListBotLocalesRequest:
    headers: ListBotLocalesHeaders = field()
    path_params: ListBotLocalesPathParams = field()
    query_params: ListBotLocalesQueryParams = field()
    request: ListBotLocalesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListBotLocalesResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_bot_locales_response: Optional[shared.ListBotLocalesResponse] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
