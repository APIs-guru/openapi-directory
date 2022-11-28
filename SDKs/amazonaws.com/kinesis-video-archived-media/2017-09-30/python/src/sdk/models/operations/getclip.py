from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetClipHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetClipRequestBodyClipFragmentSelector:
    r"""GetClipRequestBodyClipFragmentSelector
    <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
    """
    
    fragment_selector_type: Optional[shared.ClipFragmentSelectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentSelectorType') }})
    timestamp_range: Optional[shared.ClipTimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampRange') }})
    

@dataclass_json
@dataclass
class GetClipRequestBody:
    clip_fragment_selector: GetClipRequestBodyClipFragmentSelector = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClipFragmentSelector') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclass
class GetClipRequest:
    headers: GetClipHeaders = field()
    request: GetClipRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetClipResponse:
    content_type: str = field()
    status_code: int = field()
    client_limit_exceeded_exception: Optional[Any] = field(default=None)
    get_clip_output: Optional[shared.GetClipOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_codec_private_data_exception: Optional[Any] = field(default=None)
    invalid_media_frame_exception: Optional[Any] = field(default=None)
    missing_codec_private_data_exception: Optional[Any] = field(default=None)
    no_data_retention_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    unsupported_stream_media_type_exception: Optional[Any] = field(default=None)
    
