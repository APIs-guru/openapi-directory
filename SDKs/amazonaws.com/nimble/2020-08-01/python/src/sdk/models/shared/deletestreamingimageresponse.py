from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamingimage


@dataclass_json
@dataclass
class DeleteStreamingImageResponse:
    streaming_image: Optional[streamingimage.StreamingImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingImage' }})
    
