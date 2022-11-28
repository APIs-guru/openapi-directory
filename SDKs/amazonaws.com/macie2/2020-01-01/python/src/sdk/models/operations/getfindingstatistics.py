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
class GetFindingStatisticsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetFindingStatisticsRequestBodyFindingCriteria:
    r"""GetFindingStatisticsRequestBodyFindingCriteria
    Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    """
    
    criterion: Optional[dict[str, shared.CriterionAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterion') }})
    
class GetFindingStatisticsRequestBodyGroupByEnum(str, Enum):
    RESOURCES_AFFECTED_S3_BUCKET_NAME = "resourcesAffected.s3Bucket.name"
    TYPE = "type"
    CLASSIFICATION_DETAILS_JOB_ID = "classificationDetails.jobId"
    SEVERITY_DESCRIPTION = "severity.description"


@dataclass_json
@dataclass
class GetFindingStatisticsRequestBodySortCriteria:
    r"""GetFindingStatisticsRequestBodySortCriteria
    Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
    """
    
    attribute_name: Optional[shared.FindingStatisticsSortAttributeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    order_by: Optional[shared.OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    

@dataclass_json
@dataclass
class GetFindingStatisticsRequestBody:
    group_by: GetFindingStatisticsRequestBodyGroupByEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBy') }})
    finding_criteria: Optional[GetFindingStatisticsRequestBodyFindingCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingCriteria') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sort_criteria: Optional[GetFindingStatisticsRequestBodySortCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortCriteria') }})
    

@dataclass
class GetFindingStatisticsRequest:
    headers: GetFindingStatisticsHeaders = field()
    request: GetFindingStatisticsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetFindingStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    get_finding_statistics_response: Optional[shared.GetFindingStatisticsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
