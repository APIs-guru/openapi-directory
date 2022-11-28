from dataclasses import dataclass, field



@dataclass
class VideoThumbnailUploadPayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class VideoThumbnailUploadPayload:
    file: VideoThumbnailUploadPayloadFile = field(metadata={'multipart_form': { 'file': True }})
    
