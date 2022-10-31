from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateConfigurationSetEventDestinationPathParams:
    configuration_set_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    event_destination_name: str = field(default=None, metadata={'path_param': { 'field_name': 'EventDestinationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConfigurationSetEventDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateConfigurationSetEventDestinationRequestBodyEventDestination:
    cloud_watch_logs_destination: Optional[shared.CloudWatchLogsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsDestination' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    kinesis_firehose_destination: Optional[shared.KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseDestination' }})
    matching_event_types: Optional[List[shared.EventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchingEventTypes' }})
    sns_destination: Optional[shared.SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsDestination' }})
    

@dataclass_json
@dataclass
class UpdateConfigurationSetEventDestinationRequestBody:
    event_destination: Optional[UpdateConfigurationSetEventDestinationRequestBodyEventDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventDestination' }})
    

@dataclass
class UpdateConfigurationSetEventDestinationRequest:
    path_params: UpdateConfigurationSetEventDestinationPathParams = field(default=None)
    headers: UpdateConfigurationSetEventDestinationHeaders = field(default=None)
    request: UpdateConfigurationSetEventDestinationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConfigurationSetEventDestinationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_configuration_set_event_destination_response: Optional[dict[str, Any]] = field(default=None)
    
