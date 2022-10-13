from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentversioninfo


@dataclass_json
@dataclass
class ListDocumentVersionsResult:
    document_versions: Optional[List[documentversioninfo.DocumentVersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
