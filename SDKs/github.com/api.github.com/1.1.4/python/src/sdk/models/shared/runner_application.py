from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunnerApplication:
    r"""RunnerApplication
    Runner Application
    """
    
    architecture: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    download_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    os: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    
