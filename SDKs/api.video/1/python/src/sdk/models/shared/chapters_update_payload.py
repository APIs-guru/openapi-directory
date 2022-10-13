from dataclasses import dataclass, field



@dataclass
class ChaptersUpdatePayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class ChaptersUpdatePayload:
    file: ChaptersUpdatePayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    
