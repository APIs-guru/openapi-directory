from dataclasses import dataclass, field



@dataclass
class PlayersUploadLogoPayloadFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PlayersUploadLogoPayload:
    file: PlayersUploadLogoPayloadFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    link: str = field(default=None, metadata={'multipart_form': { 'field_name': 'link' }})
    
