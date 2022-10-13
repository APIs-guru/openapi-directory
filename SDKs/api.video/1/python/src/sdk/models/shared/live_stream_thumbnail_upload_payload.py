from dataclasses import dataclass, field



@dataclass
class LiveStreamThumbnailUploadPayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class LiveStreamThumbnailUploadPayload:
    file: LiveStreamThumbnailUploadPayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    
