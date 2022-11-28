from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TokenUploadPayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class TokenUploadPayload:
    file: TokenUploadPayloadFile = field(metadata={'multipart_form': { 'file': True }})
    video_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'videoId' }})
    
