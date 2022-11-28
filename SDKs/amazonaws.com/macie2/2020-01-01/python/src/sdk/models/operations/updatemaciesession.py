from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateMacieSessionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum(str, Enum):
    FIFTEEN_MINUTES = "FIFTEEN_MINUTES"
    ONE_HOUR = "ONE_HOUR"
    SIX_HOURS = "SIX_HOURS"

class UpdateMacieSessionRequestBodyStatusEnum(str, Enum):
    PAUSED = "PAUSED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class UpdateMacieSessionRequestBody:
    finding_publishing_frequency: Optional[UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingPublishingFrequency') }})
    status: Optional[UpdateMacieSessionRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class UpdateMacieSessionRequest:
    headers: UpdateMacieSessionHeaders = field()
    request: UpdateMacieSessionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMacieSessionResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_macie_session_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
