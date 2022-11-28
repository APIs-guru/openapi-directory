from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class BatchEnableStandardsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BatchEnableStandardsRequestBody:
    standards_subscription_requests: List[shared.StandardsSubscriptionRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsSubscriptionRequests') }})
    

@dataclass
class BatchEnableStandardsRequest:
    headers: BatchEnableStandardsHeaders = field()
    request: BatchEnableStandardsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchEnableStandardsResponse:
    content_type: str = field()
    status_code: int = field()
    batch_enable_standards_response: Optional[shared.BatchEnableStandardsResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_access_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    
