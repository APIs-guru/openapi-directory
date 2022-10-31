from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashStreamingSessionURLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetDashStreamingSessionURLRequestBodyDashFragmentSelector:
    fragment_selector_type: Optional[shared.DashFragmentSelectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FragmentSelectorType' }})
    timestamp_range: Optional[shared.DashTimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampRange' }})
    
class GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

class GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

class GetDashStreamingSessionURLRequestBodyPlaybackModeEnum(str, Enum):
    LIVE = "LIVE"
    LIVE_REPLAY = "LIVE_REPLAY"
    ON_DEMAND = "ON_DEMAND"


@dataclass_json
@dataclass
class GetDashStreamingSessionURLRequestBody:
    dash_fragment_selector: Optional[GetDashStreamingSessionURLRequestBodyDashFragmentSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DASHFragmentSelector' }})
    display_fragment_number: Optional[GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayFragmentNumber' }})
    display_fragment_timestamp: Optional[GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayFragmentTimestamp' }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expires' }})
    max_manifest_fragment_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxManifestFragmentResults' }})
    playback_mode: Optional[GetDashStreamingSessionURLRequestBodyPlaybackModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaybackMode' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    

@dataclass
class GetDashStreamingSessionURLRequest:
    headers: GetDashStreamingSessionURLHeaders = field(default=None)
    request: GetDashStreamingSessionURLRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDashStreamingSessionURLResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_dash_streaming_session_url_output: Optional[shared.GetDashStreamingSessionURLOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_codec_private_data_exception: Optional[Any] = field(default=None)
    missing_codec_private_data_exception: Optional[Any] = field(default=None)
    no_data_retention_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_stream_media_type_exception: Optional[Any] = field(default=None)
    
