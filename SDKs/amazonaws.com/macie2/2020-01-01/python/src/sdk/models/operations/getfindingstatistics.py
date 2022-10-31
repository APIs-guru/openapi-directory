from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
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
    criterion: Optional[dict[str, shared.CriterionAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterion' }})
    
class GetFindingStatisticsRequestBodyGroupByEnum(str, Enum):
    RESOURCES_AFFECTED_S3_BUCKET_NAME = "resourcesAffected.s3Bucket.name"
    TYPE = "type"
    CLASSIFICATION_DETAILS_JOB_ID = "classificationDetails.jobId"
    SEVERITY_DESCRIPTION = "severity.description"


@dataclass_json
@dataclass
class GetFindingStatisticsRequestBodySortCriteria:
    attribute_name: Optional[shared.FindingStatisticsSortAttributeNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    order_by: Optional[shared.OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    

@dataclass_json
@dataclass
class GetFindingStatisticsRequestBody:
    finding_criteria: Optional[GetFindingStatisticsRequestBodyFindingCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingCriteria' }})
    group_by: GetFindingStatisticsRequestBodyGroupByEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupBy' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    sort_criteria: Optional[GetFindingStatisticsRequestBodySortCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortCriteria' }})
    

@dataclass
class GetFindingStatisticsRequest:
    headers: GetFindingStatisticsHeaders = field(default=None)
    request: GetFindingStatisticsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetFindingStatisticsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_finding_statistics_response: Optional[shared.GetFindingStatisticsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
