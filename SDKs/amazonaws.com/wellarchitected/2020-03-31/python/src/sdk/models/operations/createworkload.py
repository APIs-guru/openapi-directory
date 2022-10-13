from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateWorkloadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateWorkloadRequestBodyEnvironmentEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    PREPRODUCTION = "PREPRODUCTION"


@dataclass_json
@dataclass
class CreateWorkloadRequestBody:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIds' }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchitecturalDesign' }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegions' }})
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    environment: CreateWorkloadRequestBodyEnvironmentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Industry' }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndustryType' }})
    lenses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lenses' }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonAwsRegions' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarPriorities' }})
    review_owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewOwner' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    workload_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadName' }})
    

@dataclass
class CreateWorkloadRequest:
    headers: CreateWorkloadHeaders = field(default=None)
    request: CreateWorkloadRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkloadResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_workload_output: Optional[shared.CreateWorkloadOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
