from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class ChaptersUpdatePayloadFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class ChaptersUpdatePayload:
    file: ChaptersUpdatePayloadFile = field(metadata={'multipart_form': { 'file': True }})
    
