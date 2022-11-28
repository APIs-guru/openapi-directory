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
class UpdateWorkloadPathParams:
    workload_id: str = field(metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkloadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateWorkloadRequestBodyEnvironmentEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    PREPRODUCTION = "PREPRODUCTION"

class UpdateWorkloadRequestBodyImprovementStatusEnum(str, Enum):
    NOT_APPLICABLE = "NOT_APPLICABLE"
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    RISK_ACKNOWLEDGED = "RISK_ACKNOWLEDGED"


@dataclass_json
@dataclass
class UpdateWorkloadRequestBody:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIds') }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchitecturalDesign') }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: Optional[UpdateWorkloadRequestBodyEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    improvement_status: Optional[UpdateWorkloadRequestBodyImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementStatus') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Industry') }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndustryType') }})
    is_review_owner_update_acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReviewOwnerUpdateAcknowledged') }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonAwsRegions') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarPriorities') }})
    review_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewOwner') }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadName') }})
    

@dataclass
class UpdateWorkloadRequest:
    headers: UpdateWorkloadHeaders = field()
    path_params: UpdateWorkloadPathParams = field()
    request: UpdateWorkloadRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkloadResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_workload_output: Optional[shared.UpdateWorkloadOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
