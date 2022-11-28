from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class FormDataContentDisposition:
    r"""FormDataContentDisposition
    The metadata for the file.
    """
    
    creation_date: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'creationDate' }})
    file_name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'fileName' }})
    modification_date: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modificationDate' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'parameters', 'json': True }})
    read_date: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'readDate' }})
    size: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    
