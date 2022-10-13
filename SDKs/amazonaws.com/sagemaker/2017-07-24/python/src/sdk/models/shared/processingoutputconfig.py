from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import processingoutput


@dataclass_json
@dataclass
class ProcessingOutputConfig:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    outputs: List[processingoutput.ProcessingOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    
