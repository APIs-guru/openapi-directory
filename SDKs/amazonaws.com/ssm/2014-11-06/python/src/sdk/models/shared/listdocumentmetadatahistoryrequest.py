from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentmetadataenum_enum


@dataclass_json
@dataclass
class ListDocumentMetadataHistoryRequest:
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    metadata: documentmetadataenum_enum.DocumentMetadataEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
