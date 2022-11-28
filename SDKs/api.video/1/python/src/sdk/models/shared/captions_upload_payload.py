from dataclasses import dataclass, field



@dataclass
class CaptionsUploadPayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class CaptionsUploadPayload:
    file: CaptionsUploadPayloadFile = field(metadata={'multipart_form': { 'file': True }})
    
