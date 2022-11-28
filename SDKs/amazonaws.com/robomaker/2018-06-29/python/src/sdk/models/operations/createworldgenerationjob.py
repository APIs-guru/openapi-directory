from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateWorldGenerationJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateWorldGenerationJobRequestBodyWorldCount:
    r"""CreateWorldGenerationJobRequestBodyWorldCount
    <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
    """
    
    floorplan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorplanCount') }})
    interior_count_per_floorplan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interiorCountPerFloorplan') }})
    

@dataclass_json
@dataclass
class CreateWorldGenerationJobRequestBody:
    template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    world_count: CreateWorldGenerationJobRequestBodyWorldCount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldCount') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    world_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldTags') }})
    

@dataclass
class CreateWorldGenerationJobRequest:
    headers: CreateWorldGenerationJobHeaders = field()
    request: CreateWorldGenerationJobRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorldGenerationJobResponse:
    content_type: str = field()
    status_code: int = field()
    create_world_generation_job_response: Optional[shared.CreateWorldGenerationJobResponse] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
