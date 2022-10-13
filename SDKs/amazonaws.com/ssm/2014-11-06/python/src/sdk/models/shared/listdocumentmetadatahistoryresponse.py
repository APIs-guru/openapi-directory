from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentmetadataresponseinfo


@dataclass_json
@dataclass
class ListDocumentMetadataHistoryResponse:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    metadata: Optional[documentmetadataresponseinfo.DocumentMetadataResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
