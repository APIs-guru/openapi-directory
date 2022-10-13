from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import block
from . import documentmetadata


@dataclass_json
@dataclass
class DetectDocumentTextResponse:
    blocks: Optional[List[block.Block]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blocks' }})
    detect_document_text_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectDocumentTextModelVersion' }})
    document_metadata: Optional[documentmetadata.DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentMetadata' }})
    
