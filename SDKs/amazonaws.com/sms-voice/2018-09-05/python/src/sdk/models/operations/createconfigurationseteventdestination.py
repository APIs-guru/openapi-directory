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
class CreateConfigurationSetEventDestinationPathParams:
    configuration_set_name: str = field(metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConfigurationSetEventDestinationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetEventDestinationRequestBodyEventDestination:
    r"""CreateConfigurationSetEventDestinationRequestBodyEventDestination
    An object that defines a single event destination.
    """
    
    cloud_watch_logs_destination: Optional[shared.CloudWatchLogsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogsDestination') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kinesis_firehose_destination: Optional[shared.KinesisFirehoseDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseDestination') }})
    matching_event_types: Optional[List[shared.EventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchingEventTypes') }})
    sns_destination: Optional[shared.SnsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDestination') }})
    

@dataclass_json
@dataclass
class CreateConfigurationSetEventDestinationRequestBody:
    event_destination: Optional[CreateConfigurationSetEventDestinationRequestBodyEventDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDestination') }})
    event_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDestinationName') }})
    

@dataclass
class CreateConfigurationSetEventDestinationRequest:
    headers: CreateConfigurationSetEventDestinationHeaders = field()
    path_params: CreateConfigurationSetEventDestinationPathParams = field()
    request: CreateConfigurationSetEventDestinationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConfigurationSetEventDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    already_exists_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    create_configuration_set_event_destination_response: Optional[dict[str, Any]] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
