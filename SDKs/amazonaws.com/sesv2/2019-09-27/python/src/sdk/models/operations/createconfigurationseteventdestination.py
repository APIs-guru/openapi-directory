from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConfigurationSetEventDestinationPathParams:
    configuration_set_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConfigurationSetEventDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetEventDestinationRequestBodyEventDestination:
    cloud_watch_destination: Optional[shared.CloudWatchDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchDestination' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    kinesis_firehose_destination: Optional[shared.KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseDestination' }})
    matching_event_types: Optional[List[shared.EventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchingEventTypes' }})
    pinpoint_destination: Optional[shared.PinpointDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PinpointDestination' }})
    sns_destination: Optional[shared.SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsDestination' }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetEventDestinationRequestBody:
    event_destination: CreateConfigurationSetEventDestinationRequestBodyEventDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventDestination' }})
    event_destination_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventDestinationName' }})
    

@dataclass
class CreateConfigurationSetEventDestinationRequest:
    path_params: CreateConfigurationSetEventDestinationPathParams = field(default=None)
    headers: CreateConfigurationSetEventDestinationHeaders = field(default=None)
    request: CreateConfigurationSetEventDestinationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConfigurationSetEventDestinationResponse:
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_configuration_set_event_destination_response: Optional[dict[str, Any]] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
