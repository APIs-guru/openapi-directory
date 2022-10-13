from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentreviews


@dataclass_json
@dataclass
class UpdateDocumentMetadataRequest:
    document_reviews: documentreviews.DocumentReviews = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentReviews' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
