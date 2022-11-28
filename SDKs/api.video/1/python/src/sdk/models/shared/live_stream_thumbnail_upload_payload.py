from dataclasses import dataclass, field



@dataclass
class LiveStreamThumbnailUploadPayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class LiveStreamThumbnailUploadPayload:
    file: LiveStreamThumbnailUploadPayloadFile = field(metadata={'multipart_form': { 'file': True }})
    
