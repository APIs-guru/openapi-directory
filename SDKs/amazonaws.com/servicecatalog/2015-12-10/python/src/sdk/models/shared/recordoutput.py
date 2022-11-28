from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecordOutput:
    r"""RecordOutput
    The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    output_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKey') }})
    output_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputValue') }})
    
