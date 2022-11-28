from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HumanLoopOutput:
    r"""HumanLoopOutput
    Information about where the human output will be stored.
    """
    
    output_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Uri') }})
    
