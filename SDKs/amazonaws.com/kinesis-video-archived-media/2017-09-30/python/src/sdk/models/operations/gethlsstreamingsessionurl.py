from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetHlsStreamingSessionURLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetHlsStreamingSessionURLRequestBodyContainerFormatEnum(str, Enum):
    FRAGMENTED_MP4 = "FRAGMENTED_MP4"
    MPEG_TS = "MPEG_TS"

class GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"
    ON_DISCONTINUITY = "ON_DISCONTINUITY"

class GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"


@dataclass_json
@dataclass
class GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector:
    fragment_selector_type: Optional[shared.HlsFragmentSelectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FragmentSelectorType' }})
    timestamp_range: Optional[shared.HlsTimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampRange' }})
    
class GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum(str, Enum):
    LIVE = "LIVE"
    LIVE_REPLAY = "LIVE_REPLAY"
    ON_DEMAND = "ON_DEMAND"


@dataclass_json
@dataclass
class GetHlsStreamingSessionURLRequestBody:
    container_format: Optional[GetHlsStreamingSessionURLRequestBodyContainerFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerFormat' }})
    discontinuity_mode: Optional[GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscontinuityMode' }})
    display_fragment_timestamp: Optional[GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayFragmentTimestamp' }})
    expires: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expires' }})
    hls_fragment_selector: Optional[GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HLSFragmentSelector' }})
    max_media_playlist_fragment_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxMediaPlaylistFragmentResults' }})
    playback_mode: Optional[GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaybackMode' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    

@dataclass
class GetHlsStreamingSessionURLRequest:
    headers: GetHlsStreamingSessionURLHeaders = field(default=None)
    request: GetHlsStreamingSessionURLRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetHlsStreamingSessionURLResponse:
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_hls_streaming_session_url_output: Optional[shared.GetHlsStreamingSessionURLOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_codec_private_data_exception: Optional[Any] = field(default=None)
    missing_codec_private_data_exception: Optional[Any] = field(default=None)
    no_data_retention_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_stream_media_type_exception: Optional[Any] = field(default=None)
    
