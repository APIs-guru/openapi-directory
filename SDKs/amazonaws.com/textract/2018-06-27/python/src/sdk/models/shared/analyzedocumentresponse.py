from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import block
from . import documentmetadata
from . import humanloopactivationoutput


@dataclass_json
@dataclass
class AnalyzeDocumentResponse:
    analyze_document_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyzeDocumentModelVersion' }})
    blocks: Optional[List[block.Block]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Blocks' }})
    document_metadata: Optional[documentmetadata.DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentMetadata' }})
    human_loop_activation_output: Optional[humanloopactivationoutput.HumanLoopActivationOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationOutput' }})
    
