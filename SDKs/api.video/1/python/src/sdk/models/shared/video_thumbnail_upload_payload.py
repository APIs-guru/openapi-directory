from dataclasses import dataclass, field



@dataclass
class VideoThumbnailUploadPayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class VideoThumbnailUploadPayload:
    file: VideoThumbnailUploadPayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    
