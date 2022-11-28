from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutFeedbackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback:
    r"""PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
    Feedback for an anomalous metric.
    """
    
    anomaly_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupId') }})
    is_anomaly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAnomaly') }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesId') }})
    

@dataclass_json
@dataclass
class PutFeedbackRequestBody:
    anomaly_detector_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorArn') }})
    anomaly_group_time_series_feedback: PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupTimeSeriesFeedback') }})
    

@dataclass
class PutFeedbackRequest:
    headers: PutFeedbackHeaders = field()
    request: PutFeedbackRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_feedback_response: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
