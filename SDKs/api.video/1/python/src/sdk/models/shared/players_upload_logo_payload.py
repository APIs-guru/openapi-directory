from dataclasses import dataclass, field



@dataclass
class PlayersUploadLogoPayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PlayersUploadLogoPayload:
    file: PlayersUploadLogoPayloadFile = field(metadata={'multipart_form': { 'file': True }})
    link: str = field(metadata={'multipart_form': { 'field_name': 'link' }})
    
