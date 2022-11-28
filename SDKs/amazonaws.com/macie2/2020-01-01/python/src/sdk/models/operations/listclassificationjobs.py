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
class ListClassificationJobsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListClassificationJobsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ListClassificationJobsRequestBodyFilterCriteria:
    r"""ListClassificationJobsRequestBodyFilterCriteria
    Specifies criteria for filtering the results of a request for information about classification jobs.
    """
    
    excludes: Optional[List[shared.ListJobsFilterTerm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[List[shared.ListJobsFilterTerm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    

@dataclass_json
@dataclass
class ListClassificationJobsRequestBodySortCriteria:
    r"""ListClassificationJobsRequestBodySortCriteria
    Specifies criteria for sorting the results of a request for information about classification jobs.
    """
    
    attribute_name: Optional[shared.ListJobsSortAttributeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    order_by: Optional[shared.OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    

@dataclass_json
@dataclass
class ListClassificationJobsRequestBody:
    filter_criteria: Optional[ListClassificationJobsRequestBodyFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_criteria: Optional[ListClassificationJobsRequestBodySortCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortCriteria') }})
    

@dataclass
class ListClassificationJobsRequest:
    headers: ListClassificationJobsHeaders = field()
    query_params: ListClassificationJobsQueryParams = field()
    request: ListClassificationJobsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListClassificationJobsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_classification_jobs_response: Optional[shared.ListClassificationJobsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
