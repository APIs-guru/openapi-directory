from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDataRetentionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateDataRetentionRequestBodyOperationEnum(str, Enum):
    INCREASE_DATA_RETENTION = "INCREASE_DATA_RETENTION"
    DECREASE_DATA_RETENTION = "DECREASE_DATA_RETENTION"


@dataclass_json
@dataclass
class UpdateDataRetentionRequestBody:
    current_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentVersion') }})
    data_retention_change_in_hours: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRetentionChangeInHours') }})
    operation: UpdateDataRetentionRequestBodyOperationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclass
class UpdateDataRetentionRequest:
    headers: UpdateDataRetentionHeaders = field()
    request: UpdateDataRetentionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDataRetentionResponse:
    content_type: str = field()
    status_code: int = field()
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_data_retention_output: Optional[dict[str, Any]] = field(default=None)
    version_mismatch_exception: Optional[Any] = field(default=None)
    
