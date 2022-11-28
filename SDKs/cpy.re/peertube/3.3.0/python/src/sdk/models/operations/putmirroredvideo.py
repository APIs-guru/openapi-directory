from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PutMirroredVideoRequestBody:
    video_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    

@dataclass
class PutMirroredVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMirroredVideoRequest:
    security: PutMirroredVideoSecurity = field()
    request: Optional[PutMirroredVideoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMirroredVideoResponse:
    content_type: str = field()
    status_code: int = field()
    
