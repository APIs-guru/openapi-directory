from dataclasses import dataclass, field



@dataclass
class VideoUploadPayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class VideoUploadPayload:
    file: VideoUploadPayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    
