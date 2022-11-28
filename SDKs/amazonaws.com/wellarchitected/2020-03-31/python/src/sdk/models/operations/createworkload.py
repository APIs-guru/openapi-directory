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
class CreateWorkloadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateWorkloadRequestBodyEnvironmentEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    PREPRODUCTION = "PREPRODUCTION"


@dataclass_json
@dataclass
class CreateWorkloadRequestBody:
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: CreateWorkloadRequestBodyEnvironmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    lenses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lenses') }})
    review_owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewOwner') }})
    workload_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadName') }})
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIds') }})
    architectural_design: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchitecturalDesign') }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegions') }})
    industry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Industry') }})
    industry_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndustryType') }})
    non_aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonAwsRegions') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_priorities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarPriorities') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateWorkloadRequest:
    headers: CreateWorkloadHeaders = field()
    request: CreateWorkloadRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkloadResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_workload_output: Optional[shared.CreateWorkloadOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
