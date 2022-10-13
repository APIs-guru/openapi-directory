from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import documentformat_enum


@dataclass_json
@dataclass
class GetDocumentRequest:
    document_format: Optional[documentformat_enum.DocumentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentFormat' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionName' }})
    
