from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentidentifier


@dataclass_json
@dataclass
class ListDocumentsResult:
    document_identifiers: Optional[List[documentidentifier.DocumentIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentIdentifiers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
