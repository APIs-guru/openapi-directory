from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeDocumentResponse:
    analyze_document_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyzeDocumentModelVersion') }})
    blocks: Optional[List[Block]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocks') }})
    document_metadata: Optional[DocumentMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentMetadata') }})
    human_loop_activation_output: Optional[HumanLoopActivationOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationOutput') }})
    
