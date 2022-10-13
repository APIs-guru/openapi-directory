from dataclasses import dataclass, field



@dataclass
class CaptionsUploadPayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class CaptionsUploadPayload:
    file: CaptionsUploadPayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    
