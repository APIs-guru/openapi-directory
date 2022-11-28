from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FlowDefinitionOutputConfig:
    r"""FlowDefinitionOutputConfig
    Contains information about where human output will be stored.
    """
    
    s3_output_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputPath') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
