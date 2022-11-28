from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class AttachmentRequestFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    
class AttachmentRequestResourceSubtypeEnum(str, Enum):
    ASANA_FILE_ATTACHMENTS = "asana_file_attachments"
    EXTERNAL = "external"


@dataclass
class AttachmentRequest:
    file: Optional[AttachmentRequestFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    resource_subtype: Optional[AttachmentRequestResourceSubtypeEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'resource_subtype' }})
    url: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'url' }})
    
