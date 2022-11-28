from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageConfig:
    r"""ImageConfig
    Configuration values that override the container image Dockerfile settings. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms\">Container settings</a>. 
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDirectory') }})
    
