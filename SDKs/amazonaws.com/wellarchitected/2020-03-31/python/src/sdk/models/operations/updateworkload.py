from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateWorkloadPathParams:
    workload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkloadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
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
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIds' }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchitecturalDesign' }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    environment: Optional[UpdateWorkloadRequestBodyEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    improvement_status: Optional[UpdateWorkloadRequestBodyImprovementStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementStatus' }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Industry' }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndustryType' }})
    is_review_owner_update_acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsReviewOwnerUpdateAcknowledged' }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonAwsRegions' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarPriorities' }})
    review_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewOwner' }})
    workload_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    

@dataclass
class UpdateWorkloadRequest:
    path_params: UpdateWorkloadPathParams = field(default=None)
    headers: UpdateWorkloadHeaders = field(default=None)
    request: UpdateWorkloadRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkloadResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_workload_output: Optional[shared.UpdateWorkloadOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
